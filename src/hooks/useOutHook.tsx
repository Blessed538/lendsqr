import { useEffect } from "react";

type Props = {
  ref: React.RefObject<any>;
  callbck: () => void;
};
const useOutHook = ({ ref, callbck }: Props) => {
  useEffect(() => {
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  const onClickOutside = (e: any) => {
    const element = e.target;
    // console.log("element", element);
    if (ref.current && !ref.current.contains(element)) {
      callbck();
    }
  };
};

export default useOutHook;
