'use client';
import Iframe from '@/components/common/Iframe';
import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/userContext';
import { useRouter, useSearchParams } from 'next/navigation';
import ThirdPartyLinks from '@/utils/constants/thirdparty-links';
const ThirdParty = () => {
  const [endpoint, setEndpoint] = useState('');
  const searchParams = useSearchParams();
  const userData = useUser();
  const sessionId = searchParams.get('sessionId');
  const router = useRouter();
  useEffect(() => {
    if (userData) {
      const url = ThirdPartyLinks(
        userData.email,
        userData.firstname,
        userData.lastname,
        userData.phonenumber,
        userData.token,
        userData.formToken,
        sessionId,
      );
      setEndpoint(url);
    }
  }, [userData]);
  if (!sessionId) {
    router.push(`/home`);
  }
  return <Iframe url={endpoint} />;
};

export default ThirdParty;
