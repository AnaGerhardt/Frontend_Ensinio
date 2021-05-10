import "./Resources.scss";
import { Rocket, ArrowRight } from "src/components/Icons";
import { Languages } from "src/context/LanguageContext";
import { Items } from "src/requests/getItems";
import Folder from "src/components/Icons/icon-folder.svg";
import Trilhas from "src/components/Icons/icon-trilhas.svg";
import Playlist from "src/components/Icons/icon-playlists.svg";

interface IProps {
  items?: Items;
  language?: Languages;
}

export function Resources({ items, language }: IProps) {
  return (
    <div className="recursos">
      <div className="recursos-top">
        <div className="recursos-top-pensamos">
          <div className="recursos-top-pensamos-line" />
          <span>{language && items?.resourcesComponent.top[language][0]}</span>
        </div>
        <span className="recursos-top-conheca">
          {language && items?.resourcesComponent.top[language][1]} ⚡
        </span>
      </div>
      <div className="recursos-content">
        <h1>{language && items?.resourcesComponent.title[language]}</h1>
        <div className="recursos-content-recursos">
          {language &&
            items?.resources?.map((resource, i) => (
              <div
                key={i}
                data-testid="resources"
                className="recursos-content-recursos-recurso"
              >
                {i === 0 && <img src={Trilhas} alt="" />}
                {i === 1 && <img src={Playlist} alt="" />}
                {i === 2 && <img src={Folder} alt="" />}
                <h3>{resource.title[language]}</h3>
                <p>{resource.description[language]}</p>
              </div>
            ))}
        </div>
        <hr />
        <div className="recursos-content-footer">
          <div className="recursos-content-footer-veja">
            <Rocket />
            <span>
              {language && items?.resourcesComponent.footer[language][0]}
            </span>
          </div>
          <div className="recursos-content-footer-mais">
            <span>
              {language && items?.resourcesComponent.footer[language][1]}
            </span>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
