import { Button } from "flowbite-react";
import picture from "../assets/picture.jpg";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Play Solo Leveling:ARISE on the PC!</h2>
        <p className="text-gray-500 my-2">
          register to get free rewards on launch
        </p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none">
          <a
            href="https://sololeveling.netmarble.com/en/pcplay"
            target="_blank"
            rel="noopener noreferrer">
            Pre-register
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src={picture} />
      </div>
    </div>
  );
}
