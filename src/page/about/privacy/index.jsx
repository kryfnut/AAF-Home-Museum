import React from 'react';
import './index.scss';
import { useHistory } from 'react-router-dom';

export default function AboutPrivacy() {
  const history = useHistory();

  return (
    <div className="about-privacy-container">
      <div className="text-container">
        <p className="bold">TERMS OF SERVICE</p>
        <p>These Terms of Service (which we simply call the “Terms”) form a legally binding contract between you and LagosPhoto Festival. Please read them carefully. By accessing or using our website and other products and services (collectively, our “Services”), you agree to these Terms. If you don’t agree to these Terms, kindly refrain from accessing this website and its related services.</p>
        <br />
        <p>Definitions</p>
        <p>Contributors: Home Museum contains images and text submitted by individuals referred to as “contributors”</p>
        <br />
        <p>Rights we grant you</p>
        <p>Home Museum grants you a personal, worldwide, royalty-free, non-assignable, non-exclusive, revocable, and non-sublicensable license to access and view the material provided on our website and its related services. This license is for the sole purpose of letting you use and enjoy the website’s benefits in a way that these Terms allow. You may NOT copy, modify, distribute, sell, or lease any part of the material, nor may you reverse engineer or attempt to extract the source code of that software, unless applicable laws prohibit these restrictions or you have our written permission to do so.</p>
        <br />
        <p>Limitations on your rights</p>
        <p>These Terms do NOT grant you any right to: Use branding, logos, designs, photographs, videos, or any other materials used on our website and services; copy, archive, download, upload, distribute, syndicate, broadcast, perform, display, make available, or otherwise use any portion of our website and services or the material on our website and services except as set forth in these Terms; or use our services or any material on our website and services for any commercial purposes without our consent. In short: You may not use our services or the content on our website and services in ways that are not authorized by these Terms. Nor may you help or enable anyone else in doing so.</p>
        <br />
        <p>Rights you grant us</p>
        <p>Any feedback or suggestions regarding Home Museum or other information about Home Museum or our Services, submitted through contact channels on any of our platforms, can be used without acknowledgement or compensation to you.</p>
        <br />
        <p>Intellectual property rights </p>
        <p>All photographic images in Home Museum belong to the contributors and are the sole property of the contributors.</p>
        <p>All graphic designs including the icons used on the website, created videos and posters are the sole property of Home Museum.</p>
        <p>Home Museum does NOT claim ANY ownership rights of the texts, files, images, photos, videos or any other materials submitted by the contributors. </p>
        <br />
        <p>Personal collection</p>
        <p>Visitors do not have the right to use content curated in their personal collection for any commercial purposes nor to repossess or present these images as their own. Editing or formatting of the images or collection outside of the Home Museum website is expressly forbidden.</p>
        <br />
        <p>How we will handle disputes</p>
        <p>For visitors and contributors, the laws of the country in which you reside will apply to any claim, cause of action, or dispute you have against us that arises out of or relates to these Terms ("claim"), and you may resolve your claim in any competent court in that country that has jurisdiction over the claim. In all other cases, you agree that the claim must be resolved exclusively in the Federal Republic of Nigeria, that you submit to the personal jurisdiction of either of these courts for the purpose of litigating any such claim, and that the laws of the Federal Republic of Nigeria will govern these Terms.</p>
        <p>We reserve all rights not expressly granted to you.</p>
        <p>These terms do not give rights to any third parties.</p>
        <p>For questions related to this terms please contact legal@africanartists.org</p>
        <br />
        <p className="bold">PRIVACY POLICY</p>
        <p>Information we collect:</p>
        <br />
        <p>Device attributes: information such as the operating system, hardware and software versions, signal strength, browser type, IP address, app and file names and types, and plugins.</p>
        <br />
        <p>Cookie data: data from cookies stored on your device, including cookie IDs and settings. </p>
        <br />
        <p>Information you send through the contact channels.</p>
        <br />
        <p>Information present in your personal collection.</p>
        <br />
        <p>How do we collect</p>
        <p>By accessing or using our site, your IP address is readable by the website, any information or message you send to us is collected.</p>
        <br />
      </div>
      <div className="back-container">
        <div onClick={() => history.goBack()} className="go-prev" />
      </div>
    </div>
  );
}
