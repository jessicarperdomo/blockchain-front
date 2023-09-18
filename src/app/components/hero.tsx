import Image from 'next/image';
import {Amplify, Auth} from "aws-amplify";
import awsExports from "@/app/aws-exports";

export default function Hero() {
  Amplify.configure({ Auth: awsExports });
  function handleClick() {
    console.log('increment like count');
  }

  return (
    <div className="text-center hero">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Image
              src="/enterprise-eth.webp"
              alt="Next.js Logo"
              width={400}
              height={400}
            />
          </div>
          <div className="col-sm m-auto">
            <h1 className="mb-2">Ethereum App</h1>
            <p className="lead mb-6 text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. and scrambled
              it to make a type specimen book. and scrambled it to make a type
              specimen book. and scrambled it to make a type specimen book. and
              scrambled it to make a type specimen book. and scrambled it to
              make a type specimen book.
            </p>
            <button type="button" className="btn btn-primary mt-4">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
