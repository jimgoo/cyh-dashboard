import { SESSION_STATUS } from '@/utils/constants/constant';

const INTEGRATION_SESSION = {
  title: 'Schedule your integration session',
  list: [
    {
      heading: 'In your integration session, you will work with your guide to',
      items: [
        'Review your session',
        'Process what you experienced',
        'Create actions based on your experience',
      ],
    },
    {
      heading: 'Important Reminders',
      items: [
        'There is no peer monitor required for this session and privacy is encouraged.  If there are children in the home, it is helpful to have someone there to be able to attend to their needs so you are able to be fully present in the session.',
        // 'Schedule the integration session 1-3 days after your 2nd session',
      ],
    },
  ],
  footerText: [
    'Note there is a $60 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment',
  ],
  actions: [
    {
      status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
      title: 'Schedule',
    },
    {
      status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
      title: 'Join Zoom',
    },
    {
      status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
      title: 'Reschedule',
    },
    {
      status: [SESSION_STATUS.CANCELED],
      title: 'View Canceled Appointment',
    },
  ],
};

const GROUP_INTEGRATION_SESSION = {
  title: 'Schedule your group integration session',
  list: [
    {
      heading: 'In your group integration session, you will work with your guide and others to',
      items: [
        'Review your session',
        'Process what you experienced',
        'Create actions based on your experience',
      ],
    },
    {
      heading: 'Important Reminders',
      items: [
        'There is no peer monitor required for this session and privacy is encouraged.  If there are children in the home, it is helpful to have someone there to be able to attend to their needs so you are able to be fully present in the session.',
        // 'Schedule the integration session 1-3 days after your 2nd session',
      ],
    },
  ],
  footerText: [
    // 'Note there is a $60 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment',
  ],
  actions: [
    {
      status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
      title: 'Schedule',
    },
    {
      status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
      title: 'Join Zoom',
    },
    {
      status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
      title: 'Reschedule',
    },
    {
      status: [SESSION_STATUS.CANCELED],
      title: 'View Canceled Appointment',
    },
  ],
};

export const sessions = [
  {
    id: 'telemedicine_paperwork',
    title: 'Review and sign telemedicine paperwork',
    paragraphText: [
      'Your comfort and safety is our priority which is why we strive to be as transparent as possible. We want to provide you with a thorough understanding of the process upfront so that you know what to expect in your at-home ketamine sessions',
      <span>
        The{' '}
        <b>
          <a
            style={{ color: '#4261EF' }}
            rel={'noreferrer'}
            target={'_blank'}
            href={'https://www.chooseketamine.com/ketamine-treatment-informed-consent'}
          >
            Informed Consent
          </a>
        </b>{' '}
        and{' '}
        <b>
          <a
            style={{ color: '#4261EF' }}
            rel={'noreferrer'}
            target={'_blank'}
            href={'https://www.chooseketamine.com/remote-treatment-agreement'}
          >
            Remote Treatment Agreement
          </a>
        </b>{' '}
        provide you with important information about your medication. Please review these carefully.
        This includes a brief history of ketamine, some of the off-label uses, the therapeutic
        benefits, and potential side effects. The paperwork also outlines what is required from you
        to ensure your safety and promote the most optimal outcomes from treatment. One of the key
        requirements is having a peer present in your home with you on the days of your treatments.
        You must also abstain from operating machinery or driving a vehicle for at least 12 hrs
        following your treatment.{' '}
      </span>,
      'During your video consultation with the clinician, you will review the paperwork together. Our clinician will also be available to answer any questions you may have regarding your treatment. Please be sure to sign all the paperwork before meeting with the clinician.',
      'Once you have tapped the “Review” button below you will be directed to a third-party site to sign the paperwork. After you have signed the paperwork you can return back to Choose Your Horizon’s client portal.',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.SCHEDULED],
        title: 'Review And Sign',
      },
    ],
  },
  {
    id: 'video_consultation',
    title: 'Video Consultation',
    paragraphText: [
      'Our clients have experienced incredible success in promoting their mental well-being through ketamine therapy. One of the reasons for this success is our treatment programs are customized and personalized for each client individually. We are excited to get to know you and to craft a personalized treatment plan to guide you on your journey.',
    ],
    list: [
      {
        heading: 'Your 40-minute consultation includes:',
        items: [
          'A psychiatric evaluation ensures that at-home ketamine therapy is right for you. Please make sure that you have your Government Issued ID card with you for this call.',
          'Our clinician will provide you with expert personalized guidance to help you prepare for your treatments. We also offer free group preparation sessions to further prepare you for your experience.',
          'Our clinician will also customize your ketamine protocol. This will include recommended frequency and number of ketamine sessions, in addition to dosing and timing of the ketamine.',
        ],
      },
    ],
    footerText: [
      'Please know that these appointments with your licensed clinicians require a lot of preparation and planning. There is a $100 no-show fee if you do not show up for your consultation. If you do need to reschedule please do so within 24hrs of your scheduled appointment.',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule My Consultation',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'video_consultation_followup_return',
    title: 'Video Consultation',
    paragraphText: [
      'Our clients have experienced incredible success in promoting their mental well-being through ketamine therapy. One of the reasons for this success is our treatment programs are customized and personalized for each client individually. We are excited to get to know you and to craft a personalized treatment plan to guide you on your journey.',
    ],
    list: [
      {
        heading: 'Your 25-minute consultation includes:',
        items: [
          'A psychiatric evaluation ensures that at-home ketamine therapy is right for you. Please make sure that you have your Government Issued ID card with you for this call.',
          'Our clinician will provide you with expert personalized guidance to help you prepare for your treatments. We also offer free group preparation sessions to further prepare you for your experience.',
          'Our clinician will also customize your ketamine protocol. This will include recommended frequency and number of ketamine sessions, in addition to dosing and timing of the ketamine.',
        ],
      },
    ],
    footerText: [
      'Please know that these appointments with your licensed clinicians require a lot of preparation and planning. There is a $100 no-show fee if you do not show up for your consultation. If you do need to reschedule please do so within 24hrs of your scheduled appointment.',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule My Consultation',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'first_experience',
    title: 'Schedule your first session',
    paragraphText: [
      'It’s time to schedule your first ketamine therapy session with your Choose Your Horizon guide. The guide you select will work with you throughout your program to support your preparation and integration and help you get the most out of your ketamine therapy!',
    ],
    repeatCustomerParagraph: [
      'Welcome to Choose Your Horizon! To kickoff your journey please schedule your video consultation with our licensed clinician to receive full approval for treatment and a customized treatment plan. Part of what makes our program so powerful and effective  is our high-touch and personalized approach to at-home ketamine therapy. We are excited to get to know you, and to help create your treatment plan to guide you on your self-healing journey.',
    ],
    list: [
      {
        heading: 'How to prepare for a session',
        description:
          'For your first session please allow 3 hours for your virtual guided experience. In this session you will review the following with your Choose Your Horizon guide:',
        items: [
          'A review of what to expect throughout the session. Please have your peer present for this. (10 min)',
          'Preparing your mindset and setting an intention for the session with your guide. (20 min)',
          'Taking the oral ketamine and relaxing into your ketamine therapy session with your guide . (60 min)',
          'As the ketamine medication begins to wear off you will begin to integrate the experience with the help of your guide. (30 min)',
          'The remainder of the time will be spent reflecting on your experience and journaling. (30 min)',
        ],
      },
      {
        heading: 'Important Reminders For Your Session:',
        description:
          'You will need to schedule your first guided ketamine experience to occur 7 business days after your consultation with the clinician.',
        items: [
          'You must have a Peer Treatment Monitor present and available for a quick check-in with your guide prior to your session.',
          'Don’t eat within 3 hours or drink within 1 hour prior to treatment to help avoid the slight risk of nausea or a bathroom break that interrupts your experience.',
          "As a reminder, you've committed not to drive a vehicle until the next day and you've had a full night of sleep.",
        ],
      },
    ],
    footerText: [
      'We can’t wait to see you (virtually) for the next step on your journey!',
      'Please be aware that there is a $50 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment.',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'second_experience',
    title: 'It’s Time To Schedule Your Second Session',
    paragraphText: [
      'Choose Your Horizon provides professional guides as support for the first two sessions of every ketamine treatment package. During these two sessions your guide will sit with you through the entirety of the session. Their focus is to help prepare you for your session, guide intention setting, support you during the session, and then help with your integration after  the session. Additional sessions are self-guided with a 15 minute check-in with your guide at the start. We do offer the opportunity to continue to work with a guide during these experiences for an additional $80 per experience.',
    ],
    list: [
      {
        heading: 'Important Reminders For Your Session',
        description:
          'You will need to schedule your second guided ketamine experience to occur 7 days after your first experience.',
        items: [
          'You must have a Peer Treatment Monitor present and available for a quick check-in with your guide prior to your session.',
          'Don’t eat within 3 hours or drink within 1 hour prior to treatment to help avoid the slight risk of nausea or a bathroom break that interrupts your experience.',
          "As a reminder, you've committed not to drive a vehicle until the next day and you've had a full night of sleep.",
        ],
      },
    ],
    footerText: [
      'We can’t wait to see you (virtually) for the next step on your journey!',
      'Please be aware that there is a $50 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment.',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'video_consultation_followup',
    title: 'Follow up clinician consultation and questionnaire',
    paragraphText: [
      'Great work on your progress so far! This step is to ensure that we are providing the best service to you and to improve your results.',
    ],
    list: [
      {
        heading: 'Your 20-minute consultation includes:',
        items: [
          'A follow up consultation with a psychiatric practitioner. Make sure to have your government ID to hand for the call.',
          'Consultation on your continued treatment plan.',
          'Assessment of your first experience and guidance for the remainder of the program.',
        ],
      },
    ],
    footerText: [
      'Note there is a $100 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment ',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Begin',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  // the intro page
  {
    id: 'purchase_integration_session',
    title: 'Schedule your integration session',
    list: [
      {
        heading: 'In your integration session, you will work with your guide to',
        items: [
          'Review your session',
          'Process what you experienced',
          'Create actions based on your experience',
        ],
      },
      {
        heading: 'Important Reminders',
        items: [
          'There is no peer monitor required for this session and privacy is encouraged.  If there are children in the home, it is helpful to have someone there to be able to attend to their needs so you are able to be fully present in the session.',
          // 'Schedule the integration session 1-3 days after your 2nd session',
        ],
      },
    ],
    footerText: [
      'Note there is a $60 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment',
    ],
    actions: [
      {
        status: null,
        title: 'Schedule',
      },
    ],
  },
  // the one included with 8-pack
  {
    id: 'integration_session',
    ...INTEGRATION_SESSION,
  },
  // the add-on ones
  {
    id: 'integration_session_1',
    ...INTEGRATION_SESSION,
  },
  {
    id: 'integration_session_2',
    ...INTEGRATION_SESSION,
  },
  {
    id: 'integration_session_3',
    ...INTEGRATION_SESSION,
  },
  {
    id: 'integration_session_4',
    ...INTEGRATION_SESSION,
  },
  // the intro page
  {
    id: 'group_integration_session',
    title: 'Add a group integration session',
    list: [
      {
        heading: 'In your group integration session, you will work with your guide and others to',
        items: [
          'Review your session',
          'Process what you experienced',
          'Create actions based on your experience',
        ],
      },
      {
        heading: 'Important Reminders',
        items: [
          'There is no peer monitor required for this session and privacy is encouraged.  If there are children in the home, it is helpful to have someone there to be able to attend to their needs so you are able to be fully present in the session.',
          // 'Schedule the integration session 1-3 days after your 2nd session',
        ],
      },
    ],
    footerText: [
      // 'Note there is a $60 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment',
    ],
    actions: [
      {
        status: null, // just null for a status means it always will show this button
        title: 'Schedule',
      },
    ],
  },
  // the add-on ones
  {
    id: 'group_integration_session_1',
    ...GROUP_INTEGRATION_SESSION,
  },
  {
    id: 'group_integration_session_2',
    ...GROUP_INTEGRATION_SESSION,
  },
  {
    id: 'group_integration_session_3',
    ...GROUP_INTEGRATION_SESSION,
  },
  {
    id: 'group_integration_session_4',
    ...GROUP_INTEGRATION_SESSION,
  },
  {
    id: 'third_experience',
    title: 'It’s Time To Schedule Your Third Session',
    paragraphText: [
      'As a reminder this session is self-guided. You will meet with your guide at the start of the session for a 15 minute check-in at the start of your experience. If you would like to work with a guide throughout the entire session we do offer the opportunity to continue that work for an additional $80 per experience.',
    ],
    list: [
      {
        heading: 'Important Reminders',
        items: [
          'Make sure to create some space before and after your session to set and clarify any intentions you have for the session, and to journal',
          'Please make sure that you have a Peer Treatment Monitor present and available for a quick check-in with your guide prior to your session',
          'Don’t eat within 3 hours or drink within 1 hour prior to treatment to help avoid the slight risk of nausea or a bathroom break that interrupts your experience.',
          "As a reminder, you've committed not to drive a vehicle until the next day and you've had a full night of sleep.",
        ],
      },
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Guided Experience',
        isGuided: true,
      },
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Self Guided Experience',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'fourth_experience',
    title: 'Schedule your fourth session',
    paragraphText: [
      'Choose Ketamine provides professional guides as support for the first two sessions of every Ketamine treatment package. Sessions 3 - 6 are self-guided with a 15 minute check-in with our guide at the start. The guide will help you prepare for the experience and check that your peer is present. We do offer the opportunity to continue to work with our guides during these experiences for $80 per experience.',
    ],
    list: [
      {
        heading: 'Important Reminders',
        items: [
          'Make sure to create some space before and after your session to clarify your intentions and journal.',
          'You must have a Peer Treatment Monitor present and available for a quick check-in with your guide prior to your session.',
          'Don’t eat within 3 hours or drink within 1 hour prior to treatment to help avoid the slight risk of nausea or a bathroom break that interrupts your experience.',
          "As a reminder, you've committed not to drive a vehicle until the next day and you've had a full night of sleep.",
        ],
      },
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Guided Experience',
        isGuided: true,
      },
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Self Guided Experience',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'video_consultation_followup_after_fourth',
    title: 'Follow up clinician consultation and questionnaire',
    paragraphText: [
      'Great work on your progress so far! This step is to ensure that we are providing the best service to you and to improve your results.',
    ],
    list: [
      {
        heading: 'Your 20-minute consultation includes:',
        items: [
          'A follow up consultation with a psychiatric practitioner. Make sure to have your government ID to hand for the call.',
          'Consultation on your continued treatment plan.',
          'Assessment of your first experience and guidance for the remainder of the program.',
        ],
      },
    ],
    footerText: [
      'Note there is a $100 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment ',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Begin',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'fifth_experience',
    title: 'Schedule your fifth session',
    paragraphText: [
      'Choose Ketamine provides professional guides as support for the first two sessions of every Ketamine treatment package. Sessions 3 - 6 are self-guided with a 15 minute check-in with our guide at the start. The guide will help you prepare for the experience and check that your peer is present. We do offer the opportunity to continue to work with our guides during these experiences for $80 per experience.',
    ],
    list: [
      {
        heading: 'Important Reminders',
        items: [
          'Make sure to create some space before and after your session to clarify your intentions and journal.',
          'You must have a Peer Treatment Monitor present and available for a quick check-in with your guide prior to your session.',
          'Don’t eat within 3 hours or drink within 1 hour prior to treatment to help avoid the slight risk of nausea or a bathroom break that interrupts your experience.',
          "As a reminder, you've committed not to drive a vehicle until the next day and you've had a full night of sleep.",
        ],
      },
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Guided Experience',
        isGuided: true,
      },
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Self Guided Experience',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'sixth_experience',
    title: 'Schedule your sixth session',
    paragraphText: [
      'Choose Ketamine provides professional guides as support for the first two sessions of every Ketamine treatment package. Sessions 3 - 6 are self-guided with a 15 minute check-in with our Guide at the start. The Guide will help you prepare for the experience and check that your peer is present. We do offer the opportunity to continue to work with our guides during these experiences for $80 per experience.',
    ],
    list: [
      {
        heading: 'Important Reminders',
        items: [
          'Make sure to create some space before and after your session to clarify your intentions and journal.',
          'You must have a Peer Treatment Monitor present and available for a quick check-in with your Guide prior to your session.',
          'Don’t eat within 3 hours or drink within 1 hour prior to treatment to help avoid the slight risk of nausea or a bathroom break that interrupts your experience.',
          "As a reminder, you've committed not to drive a vehicle until the next day and you've had a full night of sleep.",
        ],
      },
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Guided Experience',
        isGuided: true,
      },
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Self Guided Experience',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'video_consultation_followup_after_sixth',
    title: 'Follow up clinician consultation and questionnaire',
    paragraphText: [
      'Great work on your progress so far! This step is to ensure that we are providing the best service to you and to improve your results.',
    ],
    list: [
      {
        heading: 'Your 20-minute consultation includes:',
        items: [
          'A follow up consultation with a psychiatric practitioner. Make sure to have your government ID to hand for the call.',
          'Consultation on your continued treatment plan.',
          'Assessment of your first experience and guidance for the remainder of the program.',
        ],
      },
    ],
    footerText: [
      'Note there is a $100 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment ',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Begin',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'seventh_experience',
    title: 'Schedule your seventh session',
    paragraphText: [
      'Choose Ketamine provides professional guides as support for the first two sessions of every Ketamine treatment package. Sessions 3 - 6 are self-guided with a 15 minute check-in with our Guide at the start. The Guide will help you prepare for the experience and check that your peer is present. We do offer the opportunity to continue to work with our guides during these experiences for $80 per experience.',
    ],
    list: [
      {
        heading: 'Important Reminders',
        items: [
          'Make sure to create some space before and after your session to clarify your intentions and journal.',
          'You must have a Peer Treatment Monitor present and available for a quick check-in with your Guide prior to your session.',
          'Don’t eat within 3 hours or drink within 1 hour prior to treatment to help avoid the slight risk of nausea or a bathroom break that interrupts your experience.',
          "As a reminder, you've committed not to drive a vehicle until the next day and you've had a full night of sleep.",
        ],
      },
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Guided Experience',
        isGuided: true,
      },
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Self Guided Experience',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'eight_experience',
    title: 'Schedule your eighth session',
    paragraphText: [
      'Choose Ketamine provides professional guides as support for the first two sessions of every Ketamine treatment package. Sessions 3 - 6 are self-guided with a 15 minute check-in with our Guide at the start. The Guide will help you prepare for the experience and check that your peer is present. We do offer the opportunity to continue to work with our guides during these experiences for $80 per experience.',
    ],
    list: [
      {
        heading: 'Important Reminders',
        items: [
          'Make sure to create some space before and after your session to clarify your intentions and journal.',
          'You must have a Peer Treatment Monitor present and available for a quick check-in with your Guide prior to your session.',
          'Don’t eat within 3 hours or drink within 1 hour prior to treatment to help avoid the slight risk of nausea or a bathroom break that interrupts your experience.',
          "As a reminder, you've committed not to drive a vehicle until the next day and you've had a full night of sleep.",
        ],
      },
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Guided Experience',
        isGuided: true,
      },
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Schedule Self Guided Experience',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View Canceled Appointment',
      },
    ],
  },
  {
    id: 'video_consultation_followup_after_eight',
    title: 'Follow up clinician consultation and questionnaire',
    paragraphText: [
      'Great work on your progress so far! This step is to ensure that we are providing the best service to you and to improve your results.',
    ],
    list: [
      {
        heading: 'Your 20-minute consultation includes:',
        items: [
          'A follow up consultation with a psychiatric practitioner. Make sure to have your government ID to hand for the call.',
          'Consultation on your continued treatment plan.',
          'Assessment of your first experience and guidance for the remainder of the program.',
        ],
      },
    ],
    footerText: [
      'Note there is a $100 no-show fee. If you need to reschedule please so so within 24 hours of your upcoming appointment ',
    ],
    actions: [
      {
        status: [SESSION_STATUS.IN_COMPLETE, SESSION_STATUS.CANCELED],
        title: 'Begin',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Join Zoom',
      },
      {
        status: [SESSION_STATUS.SCHEDULED, SESSION_STATUS.RE_SCHEDULED],
        title: 'Reschedule',
      },
      {
        status: [SESSION_STATUS.CANCELED],
        title: 'View',
      },
    ],
  },
];
