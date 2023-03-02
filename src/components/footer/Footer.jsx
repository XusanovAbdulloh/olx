import React from 'react';
import "./Footer.scss";
import img_1 from "./img/img1.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <div className='container-footer'>
            <div className='footer-bussines-wrapper'>
                <img width={170} src={img_1} alt="" />
                <h2>{t("footer_text_1")}</h2>
                <a href="https://business.olx.uz/uz/">{t("footer_btn")}</a>
            </div>
            <div className="footer-text-wrapper">
                <img src="https://static.olx.uz/static/olxuz/packed/font/2f245edf8d709c906bd6c4b03d1623d647.svg" alt="" />
                <p>{t("footer_text_2")}</p>
            </div>
            <div className="footer__item-wrapper">
                <img src="https://static.olx.uz/static/olxuz/packed/font/2fc1ef4e9c6a6dc640b6feb727836fabc7.svg" alt="" />
                <p>{t("footer_text_3")}</p>
            </div>
            <div className="footer-box">
                <div className='footer-box__item-1'>
                    <a href="https://www.olx.uz/oz/mobileapps/">{t("footer_link1")}</a>
                    <a href="https://help.olx.uz">{t("footer_link2")}</a>
                    <a href="https://www.olx.uz/oz/payment/features/">{t("footer_link3")}</a>
                    <a href="https://business.olx.uz/uz">{t("footer_link4")}</a>
                    <a href="https://www.olx.uz/oz/advertising/">{t("footer_link5")}</a>
                    <a href="https://olxuz.zendesk.com/hc/ru/articles/360009197178">{t("footer_link6")}</a>
                    <a href="https://help.olx.uz/uz/elonlarni-joylashtirish-qoidalari/maxfiylik-siyosati/">{t("footer_link7")}</a>
                    <a href="#">{t("footer_link8")}</a>
                </div>
                <div className='footer-box__item-2'>
                <a href="https://www.olx.uz/oz/howitworks/">{t("footer_link9")}</a>
                <a href="https://help.olx.uz/uz/elonlarni-joylashtirish-qoidalari/xavfsizlikning-5-ta-oltin-qoidasi/">{t("footer_link10")}</a>
                <a href="https://www.olx.uz/oz/sitemap/">{t("footer_link11")}</a>
                <a href="https://www.olx.uz/oz/sitemap/regions/">{t("footer_link12")}</a>
                <a href="https://careers.olxgroup.com/">{t("footer_link13")}</a>
                <a href="https://www.olx.uz/oz/contact/">{t("footer_link14")}</a>
                </div>
                <div className='aplication-box'>
                <div className='footer-box__aplication'>
                    <a href="https://play.google.com/store/apps/details?id=com.torg.torg&amp;hl=ru&amp;referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer">salom</a>
                </div>
                <div className='footer-box__aplication2'>
                    <a  href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&amp;ign-mpt=uo%3D4">salom</a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
