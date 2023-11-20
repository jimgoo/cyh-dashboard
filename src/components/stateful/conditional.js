const Conditional = ({ showWhen, children }) => {
  if (showWhen) return <>{children}</>;
  return <></>;
};
export default Conditional;
