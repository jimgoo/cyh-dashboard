export const WELCOME_MESSAGE = 'Welcome back!';
export const WELCOME_MESSAGE_DESCRIPTION = 'A sign in link will be sent to your email.';

export const HOME_DESCRIPTION =
  'View the details of your future sessions including the session plan, important reminders, or requirements for the specific session.';

export const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: 'short',
};

export const PUBLIC_ENDPOINTS = ['faq', 'contact'];

export const USER_STATUS = {
  APPROVED: 'approved',
  PENDING: 'pending',
  REJECTED: 'not approved',
  CLEARANCE: 'pending-pcp clearance',
  CANCELED: 'canceled',
  ONHOLD: 'account on hold',
};

export function getUserStatusDetails(userStatus) {
  switch (userStatus) {
    case USER_STATUS.PENDING:
      return {
        heading: 'Awaiting Approval',
        description:
          'You have now completed the first steps of your journey with Choose Your Horizon. Once we have received treatment approval from our licensed clinician following your consultation, we will guide you through next steps. Please feel free to visit our FAQ section for any questions that may arise, or contact us at hello@chooseyourhorizon.com',
      };
    case USER_STATUS.APPROVED:
      return {
        heading: 'Awaiting Approval',
        description:
          'You have now completed the first steps of your journey with Choose Your Horizon. Once we have received treatment approval from our licensed clinician following your consultation, we will guide you through next steps. Please feel free to visit our FAQ section for any questions that may arise, or contact us at hello@chooseyourhorizon.com',
        CardStyle: { background: '#DDEAE7', border: '1px solid #87D6C6' },
      };
    case USER_STATUS.CLEARANCE:
      return {
        heading: 'More Information Is Needed',
        description:
          'In order to move forward with your treatment plan we will need a bit more information. You will receive an email from our clinician regarding the additional required documents we will need to proceed. Please feel free to reach out with any questions by emailing hello@chooseyourhorizon.com',
      };
    case USER_STATUS.REJECTED:
      return {
        heading: 'Not Approved',
        description:
          'We are sorry, but we cannot approve you for treatment at this time. We have issued you a refund. Your refund should appear in your account within 5-7 business days.',
      };
    case USER_STATUS.CANCELED:
      return {
        heading: 'Account Canceled',
        description:
          'Your account has been canceled. Any refunds will take 5-7 business days to appear in your account.',
      };
    case USER_STATUS.ONHOLD:
      return {
        heading: 'Account On Hold',
        description:
          'Your account has been placed on hold. Please contact customer service to reinstate your account at hello@chooseyourhorizon.com',
      };
    default:
      return null;
  }
}

export const SESSION_STATUS = {
  COMPLETED: 'completed',
  IN_COMPLETE: 'incomplete',
  SCHEDULED: 'scheduled',
  CANCELED: 'canceled',
  RE_SCHEDULED: 'rescheduled',
};

export const SCHEDULED_ACTIONS = {
  SEND_ZOOM: 'Join Zoom',
  RE_SCHEDULE: 'Reschedule',
  VIEW: 'View Canceled Appointment',
  SCHEDULE_GUIDED: 'Schedule Guided Experience',
  SCHEDULE_SELF_GUIDED: 'Schedule Self Guided Experience',
};

export const SESSION_REMINDERS = [
  'Please set aside at least 3 uninterrupted hours for your session.',
  'If you must reschedule, please do so at least 24 hours in advance to avoid a $50 fee appointment cancellation fee.',
];
