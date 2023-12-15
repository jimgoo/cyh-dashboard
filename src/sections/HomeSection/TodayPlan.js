'use client';

import Chevron from '@/components/icons/Chevron';
import AddIcon from '@/components/icons/AddIcon';
import useCapitalize from '@/hooks/use-capitalize';
import Image from 'next/image';

const TodayPlan = ({ userData }) => {
  const capitalize = useCapitalize();

  return (
    <div className="today-plan">
      <div className="user-dropdown" style={{ marginLeft: 'auto' }}>
        <div className="avatar">{userData.firstname.charAt(0).toUpperCase()}</div>
        {capitalize(userData.firstname)}
        <Chevron />
      </div>
      <span
        style={{
          marginTop: '52px',
          marginRight: 'auto',
          fontSize: '25px',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        What's the plan for today?
      </span>
      <div className="card" style={{ width: '100%', marginTop: '18px' }}>
        <div className="card-heading">Schedule Your First Session</div>
        <div className="add-session cursor-pointer" style={{ marginTop: '29px' }}>
          <>Session Plan</>
          <AddIcon />
        </div>
        <div className="sub-heading" style={{ marginRight: 'auto', marginTop: '22px' }}>
          Important Reminders
        </div>
        <ul className="reminder-list">
          <li>Please set aside at least 3 uninterrupted hours for your session </li>
          <li>
            If you must reschedule, please do so at least 24 hours in advance to avoid a $50 fee
            appointment cancellation fee
          </li>
        </ul>
        <div className="schedule-now-btn" style={{ marginTop: '29px' }}>
          Schedule Now
        </div>
      </div>
      <Image
        src={require('@/assets/woman-in-space.png')}
        alt="Woman in space"
        className="woman-in-space"
        width={500} // Replace with the width of your image
        height={300} // Replace with the height of your image
      />
    </div>
  );
};

export default TodayPlan;
