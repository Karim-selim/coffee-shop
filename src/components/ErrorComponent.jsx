import empty from "../../src/assists/images/empty-box.svg";
import Button from "../Ui/Button";

const ErrorComponent = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center text-center">
      <div className="flex flex-col w-72 gap-6">
        <img src={empty} alt="kk" />
        <p>Page Not Found</p>
        <Button
          to=""
          className="bg-buttonColor text-lg font-bold text-white rounded-2xl py-2 mb-4 shadow-xl"
        >
          back to home
        </Button>
      </div>
    </div>
  );
};

export default ErrorComponent;
