import React, { useEffect, useState } from "react";
import { Textbox } from "../common/Textbox";
import { FormButton } from "../common/FormButton";

const OldSettings = () => {
  const [todoistKey, setTodoistKey] = useState("");
  const [todoistFilter, setTodoistFilter] = useState("");
  const [backgroundImg, setBackgroundImg] = useState("");
  const [textColour, setTextColour] = useState("");

  useEffect(() => {
    setTodoistKey(localStorage.getItem("TodoistKey") || "");
    setTodoistFilter(
      localStorage.getItem("TodoistFilter") ||
        "(today | overdue) & !assigned to: others"
    );
    setBackgroundImg(localStorage.getItem("BackgroundImg") || "");
    setTextColour(localStorage.getItem("TextColour") || "");
  }, []);

  const todoistKeyOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoistKey(event.target.value);
  };

  const todoistFilterOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTodoistFilter(event.target.value);
  };

  const backgroundImgOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundImg(event.target.value);
  };

  const textColourOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextColour(event.target.value);
  };

  const settingsSaveOnClick = () => {
    localStorage.setItem("TodoistKey", todoistKey);
    localStorage.setItem("TodoistFilter", todoistFilter);
    localStorage.setItem("BackgroundImg", backgroundImg);
    localStorage.setItem("TextColour", textColour);
  };

  return (
    <div className="flex flex-col">
      <h1 className="mb-2">Todoist</h1>
      <Textbox
        type="text"
        placeholder="Todoist API Key"
        value={todoistKey}
        onChange={todoistKeyOnChange}
      />
      <Textbox
        type="text"
        placeholder="Todoist Task Filter"
        value={todoistFilter}
        onChange={todoistFilterOnChange}
      />
      <h1 className="my-2">Style</h1>
      <Textbox
        type="text"
        placeholder="Background Image"
        value={backgroundImg}
        onChange={backgroundImgOnChange}
      />
      <Textbox
        type="text"
        placeholder="Text Colour Override"
        value={textColour}
        onChange={textColourOnChange}
      />
      <FormButton addClasses="p-2 w-32 mt-2" onClick={settingsSaveOnClick}>
        Save
      </FormButton>
    </div>
  );
};

export const GeneralPage = () => {
  return (
    <>
      <OldSettings />
    </>
  );
};