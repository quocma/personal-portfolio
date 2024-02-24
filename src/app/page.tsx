import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SocialButton from "@/components/buttons/SocialButton";
import { Facebook, GitHub, Linkedin, Download } from 'react-feather';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="mt-10 flex flex-col items-center w-full gap-3">
        <div className="relative w-[300px] h-[300px] rounded-[50%] overflow-hidden">
          <Image
            fill
            objectFit="cover"
            src={'/assets/images/avatar/avt-1.jpg'}
            alt="avatar"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Quoc Ma</h1>
        </div>
        <div className="w-30 p-2 text-center bg-c1-light rounded-md"><span className="text-sm text text-c1-main ">Web Developer</span></div>
        <div>
          <div className="flex items-center gap-2 w-full justify-between my-3">
            <SocialButton icon={<Facebook />} link='#'/>
            <SocialButton icon={<GitHub />} link='#'/>
            <SocialButton icon={<Linkedin />} link='#'/>
          </div>
          <div>
            <PrimaryButton 
              className="hover:bg-c3-light transition-all"
              name="Download Cv" 
              icon={<Download color="#ffffff" />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
