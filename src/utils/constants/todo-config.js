import Cookies from 'js-cookie';

const ALL_PRODUCTS = ['intro', 'mid', 'experienced', 'empowered', 'refund'];

export const todoConfig = () => {
  return {
    initialSteps: [
      {
        todoItem: 'telemedicine_paperwork',
        heading: 'Paperwork',
        route: `/telemedicine_paperwork`,
        description:
          'Please review and sign the telemedicine paperwork to continue on your journey.',
        product: ['intro', 'mid', 'experienced', 'empowered'],
      },
      {
        todoItem: 'file_upload_id',
        heading: 'ID Upload',
        description: "Please upload either a driver's license or an ID card.",
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'video_consultation',
        heading: 'Schedule Consultation',
        route: `/video_consultation`,
        description:
          "You're almost completely on-boarded! Now that your paperwork is complete, please schedule your psychiatric consultation with your clinician.",
        product: ALL_PRODUCTS,
      },
    ],
    sessions: [
      {
        todoItem: 'first_experience',
        heading: 'Session 1',
        route: `/first_experience`,
        description:
          "It's time to schedule your first at-home ketamine experience with your guide. Choose Your Horizon provides professional guides as support for the first two sessions of every ketamine treatment package. During these two sessions your Guide will sit with you through the entirety of the session. Their focus is to help prepare you for your session, guide intention setting, support you during the session, and then help with your integration after  the session. Additional sessions are self-guided with a 15 minute check-in with your Guide at the start. We do offer the opportunity to continue to work with a guide during these experiences for an additional $80 per experience.",
        repeatDescription:
          "Congratulations! It's time to schedule your first at-home guided ketamine session.We are so excited to embark on this journey with you. Please click the button below to select a time with one of our psychedelic guides. Please remember that you must have a peer present for your ketamine experience. We also require that your first ketamine session be completed with one of our psychedelic guides via zoom.",
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'second_experience',
        heading: 'Session 2',
        route: `/second_experience`,
        description: "It's time to schedule your second ketamine session with your guide.",
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'video_consultation_followup',
        heading: 'Follow Up Consultation',
        route: `/video_consultation_followup`,
        description:
          'Great work on your progress so far! This step is to ensure that we are providing the best service to you and to improve your results.',
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'integration_session',
        heading: 'Integration Session',
        route: `/integration_session`,
        description: `It\'s time to schedule your first integration session with your guide. Integration is an integral part of your ketamine therapy.`,
        product: ['empowered'],
      },
      {
        todoItem: 'third_experience',
        heading: 'Session 3',
        route: `/third_experience`,
        description: "It's time to schedule your third ketamine session with your guide.",
        product: ['mid', 'experienced', 'empowered', 'refund'],
      },
      {
        todoItem: 'fourth_experience',
        heading: 'Session 4',
        route: `/fourth_experience`,
        description: "It's time to schedule your fourth ketamine therapy session with your guide.",
        product: ['mid', 'experienced', 'empowered', 'refund'],
      },
      {
        todoItem: 'fifth_experience',
        heading: 'Session 5',
        route: `/fifth_experience`,
        description: "It's time to schedule your fifth ketamine therapy session with your guide.",
        product: ['experienced', 'empowered', 'refund'],
      },
      {
        todoItem: 'sixth_experience',
        heading: 'Session 6',
        route: `/sixth_experience`,
        description: "It's time to schedule your sixth ketamine therapy session with your guide.",
        product: ['experienced', 'empowered'],
      },
      {
        todoItem: 'video_consultation_followup_after_sixth',
        heading: 'Follow Up Consultation',
        route: `/video_consultation_followup_after_sixth`,
        description:
          'Great work on your progress so far! This step is to ensure that we are providing the best service to you and to improve your results.',
        product: [],
      },
      {
        todoItem: 'seventh_experience',
        heading: 'Session 7',
        route: `/seventh_experience`,
        description: "It's time to schedule your seventh ketamine therapy session with your guide.",
        product: ['empowered', 'refund'],
      },
      {
        todoItem: 'eight_experience',
        heading: 'Session 8',
        route: `/eight_experience`,
        description: "It's time to schedule your eighth ketamine therapy session with your guide.",
        product: ['empowered', 'refund'],
      },
    ],
    // these can be added on to a pack by purchasing an additional integration session
    integration_sessions: [
      {
        todoItem: 'purchase_integration_session',
        heading: 'Add an Integration Session',
        // route: `https://checkout.chooseketamine.com/nmi?planId=59e78890-9661-4a95-8c14-ff921ab99d3e&userToken=${Cookies.get(
        //   'token',
        // )}&nextURL=${encodeURIComponent(INTEGRATION_URL)}`,
        route: `/purchase_integration_session`,
        description:
          'Add an additional integration session with one of our guides to process your experience and create actions around it.',
      },
      {
        todoItem: 'integration_session',
        heading: 'Integration Session (included with current plan)',
        route: `/integration_session`,
        description: `It\'s time to schedule your first integration session with your guide. Integration is an integral part of your ketamine therapy.`,
        product: ['empowered'],
      },
      {
        todoItem: 'integration_session_1',
        heading: 'Integration Session 1',
        route: `/integration_session_1`,
        description: `It\'s time to schedule your first integration session with your guide. Integration is an integral part of your ketamine therapy.`,
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'integration_session_2',
        heading: 'Integration Session 2',
        route: `/integration_session_2`,
        description: `It\'s time to schedule your second integration session with your guide. Integration is an integral part of your ketamine therapy.`,
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'integration_session_3',
        heading: 'Integration Session 3',
        route: `/integration_session_3`,
        description: `It\'s time to schedule your third integration session with your guide. Integration is an integral part of your ketamine therapy.`,
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'integration_session_4',
        heading: 'Integration Session 4',
        route: `/integration_session_4`,
        description: `It\'s time to schedule your fourth integration session with your guide. Integration is an integral part of your ketamine therapy.`,
        product: ALL_PRODUCTS,
      },
    ],
    group_integration_sessions: [
      {
        todoItem: 'group_integration_session',
        heading: 'Add a Group Integration Session',
        route: `/group_integration_session`,
        description: `Group integration sessions can be a great way process what you experienced alongside others and are completely free of charge to join. Check out the schedule to add one to your plan.`,
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'group_integration_session_1',
        heading: 'Group Integration Session 1',
        route: `/group_integration_session_1`,
        description: `This is where you'll find information on your first group integration session.`,
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'group_integration_session_2',
        heading: 'Group Integration Session 2',
        route: `/group_integration_session_2`,
        description: `This is where you'll find information on your second group integration session.`,
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'group_integration_session_3',
        heading: 'Group Integration Session 3',
        route: `/group_integration_session_3`,
        description: `This is where you'll find information on your third group integration session.`,
        product: ALL_PRODUCTS,
      },
      {
        todoItem: 'group_integration_session_4',
        heading: 'Group Integration Session 4',
        route: `/group_integration_session_4`,
        description: `This is where you'll find information on your fourth group integration session.`,
        product: ALL_PRODUCTS,
      },
    ],
  };
};

// <TODO> this doesn't have the same format as the above, it's only the sessions key of it.
export const repeatCustomer = [
  {
    todoItem: 'video_consultation_followup_return',
    heading: 'Video Consultation',
    route: `/video_consultation_followup_return`,
    description: "It's time to schedule a video consult with your clinician.",
    product: ALL_PRODUCTS,
  },
  todoConfig().sessions[0],
  todoConfig().sessions[1],
  {
    ...todoConfig().sessions[2],
    product: ['intro'],
  },
  todoConfig().sessions[3],
  todoConfig().sessions[4],
  todoConfig().sessions[5],
  todoConfig().sessions[6],
  todoConfig().sessions[7],
  todoConfig().sessions[9],
  todoConfig().sessions[10],
];

export const globalTodos = [
  // {
  //   todoItem: 'purchase_integration_session',
  //   heading: 'Add an Integration Session',
  //   route: `https://checkout.chooseketamine.com/nmi?planId=59e78890-9661-4a95-8c14-ff921ab99d3e&userToken=${Cookies.get('token')}&nextURL=${encodeURIComponent(INTEGRATION_URL)}`,
  //   description: 'Add an additional integration session with one of our guides.',
  // },
  {
    todoItem: 'purchase_pack',
    heading: 'Purchase a New Plan',
    route: `https://www.chooseketamine.com/app/purchase-returning-client?token=${Cookies.get(
      'token',
    )}`,
    description:
      'Returning patients can purchase an additional treatment plan for 30% off. Once you purchase a new plan, you have to finish your current plan before you can start on the new one.',
  },
];
