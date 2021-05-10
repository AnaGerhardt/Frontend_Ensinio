import "./Intro.scss";
import Imagem from "src/assets/images/pessoa-intro.svg";
import { Video, Playlist, Transcription, Union } from "src/components/Icons";
import certified from "src/components/Icons/icon-certified.svg";
import { Languages } from "src/context/LanguageContext";
import { Items } from "src/requests/getItems";

interface IProps {
  items?: Items;
  language?: Languages;
}

export function Intro({ items, language }: IProps) {
  return (
    <>
      <div className="intro">
        <div className="intro-texto">
          <span>Plataforma all in one</span>
          <h1>{language && items && items.intro.title[language]}</h1>
          <p>{language && items && items.intro.content[language]}</p>
          <div className="intro-texto-buttons">
            <button type="button" className="main-button">
              {language && items && items.intro.buttons[language][0]}
            </button>
            <button type="button" className="icon-button">
              <Video />
              {language && items && items.intro.buttons[language][1]}
            </button>
          </div>
        </div>
        <div className="intro-imagem">
          <img src={Imagem} alt="" />
        </div>
      </div>
      <div className="intro-background" />
      <div className="intro-background-details">
        <div className="intro-background-details-ellipse" />
        <Union id="union1" />
        <Union id="union2" />
        <Playlist id="playlist1" />
        <Playlist id="playlist2" />
        <Playlist id="playlist3" />
        <Transcription />
        <img src={certified} alt="" />
      </div>
    </>
  );
}
