function appointmentTypes() {
  return [
    {
      id: '26589424',
      name: 'Consultation',
    },
    {
      id: '27038278',
      name: 'First Experience',
    },
    {
      id: '27789377',
      name: 'Second Experience',
    },
    {
      id: '30178060',
      name: 'Consultation Follow Up',
    },
    {
      id: '30178087',
      name: 'Third Experience (Guide)',
    },
    {
      id: '30348552',
      name: 'Third Experience (Self)',
    },
    {
      id: '30370974',
      name: 'Fourth Experience (Self)',
    },
    {
      id: '30370978',
      name: 'Fifth Experience (Self)',
    },
    {
      id: '30370984',
      name: 'Sixth Experience (Self)',
    },
    {
      id: '51100051',
      name: 'Seventh Experience (Self)',
    },
    {
      id: '51100062',
      name: 'Eight Experience (Self)',
    },
    {
      id: '30370865',
      name: 'Fourth Experience (Guide)',
    },
    {
      id: '30370868',
      name: 'Fifth Experience (Guide)',
    },
    {
      id: '30370882',
      name: 'Sixth Experience (Guide)',
    },
    {
      id: '51099997',
      name: 'Seventh Experience (Guide)',
    },
    {
      id: '51100018',
      name: 'Eight Experience (Guide)',
    },
    {
      id: '53058692',
      name: 'Integration Session',
    },
    {
      id: '49331289',
      name: 'Group Integration Session',
    },
  ];
}

const NMI_PLAN_GUIDED = '7e1a8952-5031-4bd7-874e-ef9738f8f35b';
const NMI_PLAN_INTEGRATION = '59e78890-9661-4a95-8c14-ff921ab99d3e';

function findAppointmentID(name) {
  const data = appointmentTypes();
  for (let i in data) {
    if (data[i].name === name) {
      return data[i].id;
    }
  }
  return null;
}

function squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, todoKey) {
  let url = `https://app.squarespacescheduling.com/schedule.php?owner=24101249&appointmentType=${typeID}&email=${email}&firstName=${firstName}&lastName=${lastName}&phone=${phone}&field:12572396=${formToken}`;
  if (todoKey) {
    url += `&field:13825221=${todoKey}`;
  }
  return url;
}

function checkoutURL(token, nextURL, planId) {
  return `https://checkout.chooseketamine.com/nmi?userToken=${token}&nextURL=${encodeURIComponent(
    nextURL,
  )}&planId=${planId}`;
}

function jotformFollowupURL(formToken, email, firstName, lastName, todoKey) {
  // link for the JotForm followup PHQ/GAD form, which then redirects to the acuity scheduling page for a followup appointment
  // need the todo key to differentiate between video_consultation_followup and video_consultation_followup_return since they both use the same form
  return `https://form.jotform.com/230334181758456?token=${formToken}&email=${email}&name[first]=${firstName}&name[last]=${lastName}&typeA=${todoKey}`;
}

const ThirdPartyLinks = (email, firstName, lastName, phone, token, formToken, type) => {
  switch (type) {
    case 'telemedicine_paperwork': {
      return `https://form.jotform.com/230265485851460?token=${formToken}&email=${email}&name[first]=${firstName}&name[last]=${lastName}`;
    }
    case 'video_consultation': {
      const typeID = findAppointmentID('Consultation');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'video_consultation_followup_return': {
      return jotformFollowupURL(formToken, email, firstName, lastName, type);
    }
    case 'first_experience': {
      const typeID = findAppointmentID('First Experience');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'second_experience': {
      const typeID = findAppointmentID('Second Experience');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'video_consultation_followup': {
      return jotformFollowupURL(formToken, email, firstName, lastName, type);
    }
    case 'third_experience': {
      const typeID = findAppointmentID('Third Experience (Self)');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'third_experience-guided': {
      const typeID = findAppointmentID('Third Experience (Guide)');
      const nextURL = squareSpaceURL(
        typeID,
        email,
        firstName,
        lastName,
        phone,
        formToken,
        type.replace('-guided', ''),
      );
      return checkoutURL(token, nextURL, NMI_PLAN_GUIDED);
    }
    case 'fourth_experience': {
      const typeID = findAppointmentID('Fourth Experience (Self)');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'fourth_experience-guided': {
      const typeID = findAppointmentID('Fourth Experience (Guide)');
      const nextURL = squareSpaceURL(
        typeID,
        email,
        firstName,
        lastName,
        phone,
        formToken,
        type.replace('-guided', ''),
      );
      return checkoutURL(token, nextURL, NMI_PLAN_GUIDED);
    }
    case 'video_consultation_followup_after_fourth': {
      return jotformFollowupURL(formToken, email, firstName, lastName, type);
    }
    case 'fifth_experience': {
      const typeID = findAppointmentID('Fifth Experience (Self)');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'fifth_experience-guided': {
      const typeID = findAppointmentID('Fifth Experience (Guide)');
      const nextURL = squareSpaceURL(
        typeID,
        email,
        firstName,
        lastName,
        phone,
        formToken,
        type.replace('-guided', ''),
      );
      return checkoutURL(token, nextURL, NMI_PLAN_GUIDED);
    }
    case 'sixth_experience': {
      const typeID = findAppointmentID('Sixth Experience (Self)');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'sixth_experience-guided': {
      const typeID = findAppointmentID('Sixth Experience (Guide)');
      const nextURL = squareSpaceURL(
        typeID,
        email,
        firstName,
        lastName,
        phone,
        formToken,
        type.replace('-guided', ''),
      );
      return checkoutURL(token, nextURL, NMI_PLAN_GUIDED);
    }
    case 'video_consultation_followup_after_sixth': {
      return jotformFollowupURL(formToken, email, firstName, lastName, type);
    }
    case 'seventh_experience': {
      const typeID = findAppointmentID('Seventh Experience (Self)');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'seventh_experience-guided': {
      const typeID = findAppointmentID('Seventh Experience (Guide)');
      const nextURL = squareSpaceURL(
        typeID,
        email,
        firstName,
        lastName,
        phone,
        formToken,
        type.replace('-guided', ''),
      );
      return checkoutURL(token, nextURL, NMI_PLAN_GUIDED);
    }
    case 'eight_experience': {
      const typeID = findAppointmentID('Eight Experience (Self)');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'eight_experience-guided': {
      const typeID = findAppointmentID('Eight Experience (Guide)');
      const nextURL = squareSpaceURL(
        typeID,
        email,
        firstName,
        lastName,
        phone,
        formToken,
        type.replace('-guided', ''),
      );
      return checkoutURL(token, nextURL, NMI_PLAN_GUIDED);
    }
    case 'video_consultation_followup_after_eight': {
      return jotformFollowupURL(formToken, email, firstName, lastName, type);
    }
    case 'purchase_integration_session': {
      const nextURL = `https://my.chooseketamine.com/integration`;
      return checkoutURL(token, nextURL, NMI_PLAN_INTEGRATION);
    }
    case 'integration_session': {
      const typeID = findAppointmentID('Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'integration_session_1': {
      const typeID = findAppointmentID('Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'integration_session_2': {
      const typeID = findAppointmentID('Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'integration_session_3': {
      const typeID = findAppointmentID('Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'integration_session_4': {
      const typeID = findAppointmentID('Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'group_integration_session': {
      const typeID = findAppointmentID('Group Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'group_integration_session_1': {
      const typeID = findAppointmentID('Group Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'group_integration_session_2': {
      const typeID = findAppointmentID('Group Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'group_integration_session_3': {
      const typeID = findAppointmentID('Group Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
    case 'group_integration_session_4': {
      const typeID = findAppointmentID('Group Integration Session');
      return squareSpaceURL(typeID, email, firstName, lastName, phone, formToken, type);
    }
  }
};

export default ThirdPartyLinks;
