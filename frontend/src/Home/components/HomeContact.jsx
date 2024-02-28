import React , {useRef} from "react";
import {
    Card,
    Input,
    Button,
    Typography,
    Textarea
} from "@material-tailwind/react";
import emailjs from '@emailjs/browser'

import homeContactImg from "../images/home-contact.png"

const HomeContact = () => {

    const form = useRef();

  const sendEmail = async(e) => {
    e.preventDefault();

   await emailjs.sendForm('service_o0w521j', 'template_sbir76n', form.current, 'nicO7TUR-jhMvzK3a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      form.current.reset()
  };


    return (
        <>
            <div className="bg-[#161616] flex flex-col-reverse md:flex-row items-center justify-center pt-32 px-5">

                <Card className="bg-[#161616] text-white lg:w-[45%] " shadow={false}>
                    <Typography variant="h2" className="" >
                        Contact
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal text-white">
                        Get in touch with us. We're ready to help you
                        find the best solutions.
                    </Typography>
                    <form ref={form} onSubmit={sendEmail} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-white">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography required variant="h6" color="blue-gray" className="-mb-3 text-white">
                                Your Name
                            </Typography>
                            <Input
                            required
                                name="user_name"
                                size="lg"
                                placeholder="your name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                            <Typography variant="h6" color="blue-gray" className="-mb-3 text-white">
                                Your Email
                            </Typography>
                            <Input
                            required
                                name="user_email"
                                size="lg"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white"
                                labelProps={{
                                    className: "before:content-none after:content-none text-white",
                                }}
                            />
                            <Typography variant="h6" className="-mb-3 text-white">
                               Your Message
                            </Typography>
                            <div className="sm:w-96 text-white outline-none border-none">
                                <Textarea name="message" label="Message" className="text-white outline-none border-none " />
                            </div>
                        </div>
                       
                        <Button type="submit" value="send" className="mt-6 bg-red-500 text-[18px]" fullWidth>
                            Submit
                        </Button>
                       
                    </form>
                </Card>

                <div className="flex items-center justify-center ">
                    <img src={homeContactImg} className="md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] " alt="" />
                </div>

            </div>

        </>
    )
}

export default HomeContact