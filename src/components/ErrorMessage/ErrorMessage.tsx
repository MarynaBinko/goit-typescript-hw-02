type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;


// const ErrorMessage = ({message}) => {
//   return (
//     <div>
//       <p>{message}</p>
//     </div>
//   )
// }

// export default ErrorMessage
