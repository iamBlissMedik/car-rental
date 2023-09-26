type ToastProps = {
  msg: string;
};
const Toast = ({ msg }: ToastProps) => {
  return (
    <div>
      <div className="toast toast-top toast-end">
        <div className="alert alert-success">
          <span>{msg}</span>
        </div>
      </div>
    </div>
  );
};
export default Toast;
