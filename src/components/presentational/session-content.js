'use client';
import styles from '@/styles/sessions.module.scss';
import { Button, Grid } from 'antd';
import React, { useEffect } from 'react';
import Back from '@/assets/svgs/Back';
import ThirdPartyLinks from '@/utils/constants/thirdparty-links';
import {
  useUserToken,
  useUser,
  useUserTodo,
  useProducts,
  useCurrentProduct,
} from '@/context/userContext';
import { useRouter } from 'next/navigation';
import { SCHEDULED_ACTIONS, SESSION_STATUS } from '@/utils/constants/constant';
import { useMemo } from 'react';

export const generateURL = (userData, sessionId) => {
  const url = ThirdPartyLinks(
    userData.email,
    userData.firstname,
    userData.lastname,
    userData.phonenumber,
    userData.token,
    userData.formToken,
    sessionId,
  );
  console.log(`ThirdPartyLink for ${sessionId} is ${url}`);
  return url;
};

const { useBreakpoint } = Grid;
const SessionContent = ({ sessionData }) => {
  const todoData = useUserTodo();
  const sessionItem = useMemo(() => {
    if (todoData) {
      return todoData[sessionData.id];
    }
  }, [todoData, sessionData.id]);
  const screens = useBreakpoint();
  const token = useUserToken();
  const userData = useUser();
  const router = useRouter();

  const productsData = useProducts();
  const { currentProduct } = useCurrentProduct();
  const [returnUser, setReturnUser] = React.useState(null);

  useEffect(() => {
    if (productsData && currentProduct) {
      setReturnUser(productsData[currentProduct].is_first_pack ? false : true);
    }
  }, [productsData, currentProduct]);

  const thirdPartyHandler = (action) => {
    if (action.isGuided) {
      const URL = generateURL(userData, `${sessionData.id}-guided`);
      // window.location.replace(URL); // <TODO> redirect acuity back to dashboard so we can use this to not open a new tab
      window.open(URL);
    } else {
      const URL = generateURL(userData, sessionData.id);
      window.open(URL);
      // window.location.replace(URL); // <TODO> redirect acuity back to dashboard so we can use this to not open a new tab
    }
  };
  const sessionActionHandler = (action) => {
    // if(sessionItem.status===SESSION_STATUS.SCHEDULED||sessionItem.status===SESSION_STATUS.CANCELED){
    if (action.title === SCHEDULED_ACTIONS.SEND_ZOOM) {
      window.open(sessionItem?.zoom_url);
    }
    if (action.title === SCHEDULED_ACTIONS.RE_SCHEDULE || action.title === SCHEDULED_ACTIONS.VIEW) {
      window.open(sessionItem?.confirm_link);
    }
    // }
    else {
      thirdPartyHandler(action);
    }
  };

  return (
    <article className={styles.sessionContainer}>
      <div className={styles.sessionContent}>
        <div className={styles.header}>
          <span onClick={() => router.back()} className={styles.back}>
            <Back />
          </span>
          <h4 className={styles.sessionTitle}>{sessionData.title}</h4>
        </div>
        {returnUser && sessionData.repeatCustomerParagraph ? (
          <div>
            {sessionData?.repeatCustomerParagraph?.map((para, index) => {
              return (
                <p className={styles.sessionParagraph} key={index}>
                  {para}
                </p>
              );
            })}
          </div>
        ) : (
          <div>
            {sessionData?.paragraphText?.map((para, index) => {
              return (
                <p className={styles.sessionParagraph} key={index}>
                  {para}
                </p>
              );
            })}
          </div>
        )}

        <div className={styles.linkContainer}>
          {sessionData?.links?.map((link, index) => {
            return (
              <a
                className={styles.sessionLink}
                href={link.url}
                // target={'_blank'}
                key={index}
                rel="noreferrer"
              >
                <u>{link.title}</u>
              </a>
            );
          })}
        </div>

        <div>
          {sessionData?.list?.map((listItem, index) => {
            return (
              <div key={index}>
                <h4 className={styles.sessionListHeader}>{listItem.heading}</h4>
                <p className={styles.sessionParagraph}>{listItem.description}</p>
                <ul>
                  {listItem.items.map((e, itemIndex) => {
                    return (
                      <li className={styles.sessionListItem} key={itemIndex}>
                        {e}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <footer>
          {sessionData?.footerText?.map((e, index) => {
            return (
              <div key={index}>
                <p className={styles.sessionListItem}>{e}</p>
              </div>
            );
          })}
        </footer>
      </div>
      <div className={styles.sessionActions}>
        {sessionData?.actions?.map((e, index) => {
          return (
            <React.Fragment key={index}>
              {(!sessionItem?.status || e?.status?.includes(sessionItem?.status)) && (
                <Button
                  key={index}
                  type="primary"
                  className="bg-primary-color white-color button"
                  onClick={() => {
                    sessionActionHandler(e);
                  }}
                >
                  {e.title}
                </Button>
              )}
            </React.Fragment>
          );
        })}
      </div>
      {screens.xs && (
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
      )}
    </article>
  );
};

export default SessionContent;
