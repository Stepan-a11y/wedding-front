import "./App.css";
import { Carousel } from "./carousel/Carousel";

import ringImg from "./assets/Rectangle_67_1.png";
import smallHeart from "./assets/smallHeartsvg.svg";
import threeHearts from "./assets/threeHearts.svg";
import finalPicture from "./assets/finalPicture.png";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Parse from "parse/dist/parse.min.js";

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = "6G2wRH07pIlzVynSdwdQHVI3LTmuJ8w2ZjIffCby";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "Ak9NnXu8Gx8PzvogesU04tYmpv1pmMk3dxxwpEfr";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  async function addGuest() {
    try {
      // create a new Parse Object instance
      const Guest = new Parse.Object("Guest");
      // define the attributes you want for your Object
      Guest.set("firstName", firstName);
      Guest.set("lastName", lastName);
      Guest.set("status", status);
      // save it on Back4App Data Store
      await Guest.save();
      alert("Ваш ответ успешно принят!");
    } catch (error) {
      console.log("Что-то пошло не так, попробуйте еще раз: ", error);
    }
  }

  const sentData = () => {
    setFirstName("");
    setLastName("");
    setStatus("");
    addGuest();
  };

  const changeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const changeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const changeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value);
  };

  return (
    <div className="wrapper">
      <div className="titleBlock">
        <span className="nameTitle">СТЕПАН & МИЛАНА</span>
        <span className="dateTitle">22.07.2023</span>
        <span className="subTitle">ПРИГЛАШЕНИЕ НА СВАДЬБУ</span>
      </div>
      <div className="headerImg"></div>
      <div data-aos="fade-up" className="priglosBlock">
        <div data-aos="fade-up" className="priglosWrap">
          <span className="merriedTitle">МЫ ЖЕНИМСЯ</span>
          <span data-aos="fade-up" className="merriedText">
            Дорогие друзья, родные и близкие!
          </span>
          <p data-aos="fade-up" className="merriedText">
            Мы счастливы пригласить вас на нашу свадьбу. Для нас очень важно,
            чтобы вы смогли разделить с нами самое счастливое мгновение в нашей
            жизни. Порадуйте нас своим присутствием:
          </p>
          <div data-aos="fade-up" className="bigDateTitle">
            <span className="dateText">22 июля 2023 года</span>
          </div>
          <img
            data-aos="fade-up"
            style={{ width: "14%", marginBottom: "14px" }}
            src={threeHearts}
            alt="сердешки"
          />
          <span data-aos="fade-up" className="merriedText">
            С любовью, Степан и Милана
          </span>
        </div>
      </div>
      <div data-aos="fade-up" className="sliderWrap">
        <div className="sliderBlock">
          <span className="sliderTitle">НАШИ САМЫЕ СЧАСТЛИВЫЕ МОМЕНТЫ</span>
        </div>
      </div>
      <Carousel />
      <div data-aos="fade-up" className="programWrap">
        <div className="programTitleWrap">
          <span className="programTitle">ПРОГРАММА МЕРОПРИЯТИЯ</span>
        </div>
        <div data-aos="fade-up" className="firstBlock">
          <div className="imgBlock">
            <img src={ringImg} className="imgFirst" />
          </div>
          <div data-aos="fade-up" className="textBlock">
            <div className="row">
              <div className="elem">Дата</div>
              <div className="elem">22 июля 2023 года</div>
            </div>
            <div className="row">
              <div className="elem">Сбор гостей</div>
              <div className="elem">15:00 - 15:30</div>
            </div>
            <div className="row">
              <div className="elem">Регистрация</div>
              <div className="elem">16:00 - 16:30</div>
            </div>
            <div className="row">
              <div className="elem">Банкет</div>
              <div className="elem">17:00</div>
            </div>
            <div className="row">
              <div className="elem">Место проведения</div>
              <div className="elem">кафе "Латте"</div>
            </div>
            <div className="row">
              <div className="elem">Адрес</div>
              <div className="elem">ул. Вильчковского, 127</div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="wishBlock">
        <div className="wishTitleWrap">
          <span className="wishTitle">
            НАШИ
            <br /> ПОЖЕЛАНИЯ К ВАМ:
          </span>
        </div>
        <p data-aos="fade-up" className="wishText">
          Если вы захотите подарить нам букет, то предлагаем не мучить цветы
          долгой дорогой и заменить их интересной книгой, настольной игрой или
          чем-то, что сможет напомнить нам о ваc.
        </p>
        <p data-aos="fade-up" className="wishText">
          Наши прекрасные девушки!
          <br /> Хотим напомнить вам, что белый - это цвет невесты. Мы не
          придерживаемся какой-то определенной цветовой гаммы, поэтому вы можете
          выбрать любой другой цвет для вашего образа.
        </p>
      </div>
      <div data-aos="fade-up" className="confirmBlock">
        <div data-aos="fade-up" className="confirmWrap">
          <div data-aos="fade-up" className="confirmTitleWrap">
            <span className="confirmTitle">ПОДТВЕРЖДЕНИЕ</span>
            <p className="confirmText">
              Пожалуйста, обратите внимание, что каждый гость заполняется
              отдельно, а также просим вас дать окончательный ответ до 1 июля
              2023 года.
            </p>
          </div>
          <div data-aos="fade-up" className="nameBlock">
            <input
              className="textInput"
              type="text"
              placeholder="Ваше имя"
              value={firstName}
              onChange={changeFirstName}
            />
            <input
              className="textInput"
              type="text"
              placeholder="Ваша фамилия"
              value={lastName}
              onChange={changeLastName}
            />
          </div>
          <div data-aos="fade-up" className="choiceBlock">
            <span className="confirmText" style={{ fontWeight: 500 }}>
              Сможете ли вы присутствовать?
            </span>
            <div className="choiceElem">
              <input
                className="radio"
                id="yes"
                type="radio"
                name="radio"
                value="yes"
                checked={status == "yes" ? true : false}
                onChange={changeStatus}
              />
              <label htmlFor="yes">Однозначно, да</label>
            </div>

            <div className="choiceElem">
              <input
                className="radio"
                id="no"
                type="radio"
                name="radio"
                value="no"
                checked={status == "no" ? true : false}
                onChange={changeStatus}
              />
              <label htmlFor="no">К сожалению, нет</label>
            </div>

            <div className="choiceElem">
              <input
                className="radio"
                id="idk"
                type="radio"
                name="radio"
                value="maybe"
                checked={status == "maybe" ? true : false}
                onChange={changeStatus}
              />
              <label htmlFor="idk">Пока не знаю, но очень хочется</label>
            </div>
          </div>
          <button
            data-aos="fade-up"
            className="confirmBtn"
            onClick={() => sentData()}
            disabled={!firstName || !lastName || !status}
          >
            Отправить
          </button>
        </div>
      </div>
      <div className="finalBlock">
        <div data-aos="fade-up" className="finalPicture">
          <img src={finalPicture} className="finalImg" />
        </div>
        <div className="finalText">
          <span data-aos="fade-up" className="finalTitle">
            МЫ ВАС ОЧЕНЬ ЖДЕМ И БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ НА НАШЕЙ СВАДЬБЕ!
          </span>
          <p data-aos="fade-up" className="finalSubtitle">
            И надеемся, что этот волшебный день надолго останется у вас в
            памяти.
          </p>
          <img data-aos="fade-up" src={smallHeart} alt="сердешко" />
        </div>
      </div>
    </div>
  );
};

export default App;
