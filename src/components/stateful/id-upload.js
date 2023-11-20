import IDService from '@/services/id.service';
import { useUserToken } from '@/context/userContext';
import { splitFileNameAndExtension } from '@/utils/helpers';
import { useRef, useState } from 'react';
import uploadIcon from '@/assets/svgs/upload.svg';
import { Button } from 'antd';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { MulishFont } from '@/utils/fonts/fonts';
import CrossIcon from '@/assets/icons/cross.png';
import { toast } from 'react-toastify';

const PhotoPreview = ({ selectedImage, label, setSelectedImage }) => {
  if (!selectedImage) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={uploadIcon} alt={'upload icon'}></Image>
        <p style={{ textAlign: 'center', lineHeight: 1 }}>
          <span>Click to upload</span> {label}
        </p>
        <p style={{ marginTop: 0.5, textAlign: 'center' }}>(JPG, PNG, or other image format)</p>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '80%' }}>
      <img
        style={{ width: '100%' }}
        src={URL.createObjectURL(selectedImage)}
        alt="ID"
        className="preview-img"
      />
      <span
        onClick={(e) => {
          e.stopPropagation();
          setSelectedImage(undefined);
        }}
        style={{ position: 'absolute', right: 0, top: 0, zIndex: 10 }}
      >
        <Image width={25} height={25} src={CrossIcon} alt={'icon'} />
      </span>
    </div>
  );
};
const IdUpload = () => {
  const token = useUserToken();
  const { useHandleIDUpload } = IDService();
  const { mutate: handleUploadID, isLoading, isSuccess } = useHandleIDUpload(token);
  const [frontID, setFrontID] = useState();
  const [backID, setBackID] = useState();

  const frontChangeHandler = (e) => {
    if (!e.target.files[0].type.startsWith('image/')) {
      toast.error('Front ID Should Be An Image');
    } else {
      setFrontID(e.target.files[0]);
    }
  };
  const backChangeHandler = (e) => {
    if (!e.target.files[0].type.startsWith('image/')) {
      toast.error('Back ID Should Be An Image');
    } else {
      setBackID(e.target.files[0]);
    }
  };

  const idUploadHandler = () => {
    const { name: frontIdName, extension: frontIdExtension } = splitFileNameAndExtension(
      frontID?.name,
    );
    const { name: backIdName, extension: backIdExtension } = splitFileNameAndExtension(
      backID?.name,
    );

    const frontReader = new FileReader();
    frontReader.onload = (event) => {
      const base64 = event.target.result;

      // Call handleUploadID inside the onload callback
      handleUploadID({
        name: `${frontIdName} (Front)`,
        extension: frontIdExtension,
        size: frontID?.size,
        type: 'ID',
        data: base64,
      });
    };

    frontReader.readAsDataURL(frontID); // Read the file as data URL

    const backReader = new FileReader();
    backReader.onload = (event) => {
      const base64 = event.target.result;

      // Call handleUploadID inside the onload callback
      handleUploadID({
        name: `${backIdName} (Back)`,
        extension: backIdExtension,
        size: backID?.size,
        type: 'ID',
        data: base64,
      });
    };

    backReader.readAsDataURL(backID); // Read the file as data URL
  };
  const frontInput = useRef(null);
  const handleFrontClick = (event) => {
    frontInput.current.click();
    if (!frontID) {
      // Reset the file input if the selected file is cleared
      resetFileInput(frontInput);
    }
  };
  const backInput = useRef(null);
  const handleBackClick = (event) => {
    backInput.current.click();
    if (!backID) {
      // Reset the file input if the selected file is cleared
      resetFileInput(backInput);
    }
  };
  const resetFileInput = (inputRef) => {
    try {
      // Reset the file input by clearing its value
      inputRef.current.value = '';
    } catch (error) {
      console.error('Error resetting file input:', error);
    }
  };
  return (
    <div>
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          '&.css-ahj2mt-MuiTypography-root': { fontFamily: MulishFont.style.fontFamily },
        }}
      >
        <FormLabel sx={{ color: '#4261EF' }} id="demo-radio-buttons-group-label">
          ID Type
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="driver-license"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="driver-license"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#4261EF',
                  },
                }}
              />
            }
            label="Driver's License"
          />
          <FormControlLabel
            value="id-card"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: '#4261EF',
                  },
                }}
              />
            }
            label="ID Card"
          />
        </RadioGroup>
      </FormControl>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ textAlign: 'center', color: '#4261EF' }}>{'Front of ID'}</h4>
        <input
          ref={frontInput}
          style={{ display: 'none' }}
          type={'file'}
          accept="image/*"
          onChange={(e) => frontChangeHandler(e)}
        />
        <span
          style={{ position: 'relative' }}
          className={'file-upload-region'}
          onClick={() => handleFrontClick()}
        >
          <PhotoPreview
            selectedImage={frontID}
            label={'the front of your ID'}
            setSelectedImage={setFrontID}
          />
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ textAlign: 'center', color: '#4261EF' }}>{'Back of ID'}</h4>
        <input
          ref={backInput}
          style={{ display: 'none' }}
          type={'file'}
          accept="image/*"
          onChange={(e) => backChangeHandler(e)}
        />
        <span className={'file-upload-region'} onClick={() => handleBackClick()}>
          <PhotoPreview
            selectedImage={backID}
            label={'the back of your ID'}
            setSelectedImage={setBackID}
          />
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {frontID && backID && (
          <Button
            type="text"
            className="bg-primary-color white-color primary-title button"
            onClick={() => idUploadHandler()}
          >
            {!isLoading ? 'Upload' : <CircularProgress sx={{ color: 'white' }} size={30} />}
          </Button>
        )}
      </div>
    </div>
  );
};

export default IdUpload;
