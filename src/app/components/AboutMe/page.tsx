import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">
        <span className="title-white">About</span>
        <span className="title-orange">Me</span>
      </h1>

      <div className="about-content">
        <div className="profile-image-wrapper">
          <Image
            src="/assests/img/profilepicture.jpeg"
            alt="hero"
            width={800}
            height={100}
            className="profile-image"
          />
        </div>

        <div className="profile-description">
          <div>
            <h2 className="profile-role">
              Frontend Developer <br className="hidden sm:block" /> & Graphic
              Designer
            </h2>
            <p className="profile-text">
              I&apos;m MD Zohaib Memon, a graphic designer with a passion for
              crafting distinctive brand identities and visuals that tell
              engaging stories.
            </p>
            <p className="profile-text">
              As a frontend developer, I build clean, user-centric websites that
              seamlessly blend design aesthetics with functional performance.
            </p>

            <div className="read-more">
              <button className="read-more-button">
                <a href="assests/Cv/GraphicCv.pdf">Read More...</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
