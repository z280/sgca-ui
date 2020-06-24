import React from "react";
import Card from "../components/Cards/Card";
import LoginForm from '../components/Forms/LoginForm';


interface Props {}

const login = (props: Props) => {
  return (
    <>
      <div className="h-screen bg-black bg-opacity-50 z-0">
        <div className="container mx-auto h-full flex justify-center items-center z-10">
          <Card title="Welcome">
            <LoginForm />
          </Card>
        </div>
      </div>
    </>
  );
};

export default login;
