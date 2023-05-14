import { forwardRef,useImperativeHandle,useRef } from "react";
import video1 from "./test.mp4";

function Video(props, ref) {

    const videoRef = useRef()


useImperativeHandle(ref,() => ({
 play() {
    videoRef.current.play()
 },
 pause(){
    videoRef.current.pause()
 }
}))

  return (
    <div>
      <video src={video1} width={250} ref={videoRef}></video>
    </div>
  );
}

export default forwardRef (Video)
