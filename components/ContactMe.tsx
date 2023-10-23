import React from "react";
import {
  AcademicCapIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {};
type Inputs = {
  name: string;
  subject: string;
  email: string;
  message: string;
}
export default function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (formData) =>{
    window.location.href = `mailto:ogunniyi95@gmail.com?subject=${formData.subject}&body=Hello my name is ${formData.name}. ${formData.message} (from ${formData.email})`
  }
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className=" flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have just what you need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">
            Let's have a chat!
          </span>
        </h4>

        <div className=" space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123432233</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">214 Cloudmate avenue</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ogunniyi95@gmail.com</p>
          </div>
        </div>

        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2 ">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input  {...register('subject')} placeholder="Subject" className="contactInput" type="subject" />
          <textarea {...register('message')} placeholder="Message" className="contactInput" />

          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
