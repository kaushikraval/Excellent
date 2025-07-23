import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
// import AboutBanner from '../../Assets/Images/about-us-banner.jpg';
import Education1 from '../../Assets/Images/education/1.jpg';
import Education2 from '../../Assets/Images/education/2.jpg';
import Education3 from '../../Assets/Images/education/3.jpg';
import Education4 from '../../Assets/Images/education/4.jpg';
import Education5 from '../../Assets/Images/education/5.jpg';
import Education6 from '../../Assets/Images/education/6.jpg';
import Education7 from '../../Assets/Images/education/7.jpg';
import Education8 from '../../Assets/Images/education/8.jpg';
import Education9 from '../../Assets/Images/education/9.jpg';
import Education10 from '../../Assets/Images/education/10.jpg';
import Education11 from '../../Assets/Images/education/11.jpg';
import { useNavigate } from 'react-router-dom';

export default function Education() {
  useEffect(() => {
    debugger;
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <main>
      {/* <section className="jewellary_banner education_banner">
        <Container>
          <h1 className="text-white mb15">Education Center</h1>
          <p className="text-white mb30">
            Crafting Brilliance: The Artistry and Legacy
            <span className="d-block">of Excellent corporation</span>
          </p>
          <Button variant="outline-light" className="rounded-pill px30">
            Know More
          </Button>
        </Container>
      </section> */}
      <section className="education_sec pt20 pb100 pb50-md pb80-lg">
        <Container>
          <h1 className="h2 text-center mb30">Education Center</h1>
          <Row className="g-2 g-sm-4">
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education1} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>4Cs of the Diamonds</h5>
                  <p>
                    The 4Cs of diamonds are a comprehensive set of criteria used
                    to assess and describe the quality and characteristics of a
                    diamond. The 4Cs stand for Cut, Color, Clarity, and Carat
                    Weight, and they are universally recognized in the diamond
                    industry. Each "C" plays a crucial role in determining the
                    overall beauty, value, and uniqueness of a diamond: When
                    selecting a diamond, it's essential to consider how each of
                    the 4Cs interacts with your preferences, budget, and the
                    intended use of the diamond. Finding the right balance among
                    the 4Cs ensures that you choose a diamond that not only fits
                    your style but also provides the best possible combination
                    of beauty and value.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() => navigate('/education/4cs-diamond')}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education2} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>What Are Lab-Grown Diamonds?</h5>
                  <p>
                    Diamonds have long been admired for their timeless beauty
                    and rarity. However, a new chapter in the world of diamonds
                    has emerged with the advent of lab-grown diamonds, providing
                    consumers with a sustainable and ethical alternative to
                    traditional mined diamonds in attractive price. Lab-grown
                    diamonds, also known man made diamonds, cultured diamonds,
                    created diamonds. lab grown diamonds are created in
                    controlled laboratory environments with ecofriendly method
                    rather than being mined from the Earth.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate('/education/what-are-lab-grown-diamonds')
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education3} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>How are lab-grown diamonds created?</h5>
                  <p>
                    Certainly! Let’s delve into the fascinating process of
                    creating lab-grown diamonds. These remarkable Lab Grown
                    Diamonds are produced in controlled laboratory environments,
                    using advanced technological methods that replicate and
                    mimicking the same natural conditions under the earth which
                    natural diamonds form deep within the Earth. Here are the
                    two primary methods used: High Pressure High Temperature
                    (HPHT) Chemical Vapor Deposition (CVD)
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate('/education/how-are-lab-grown-diamonds-created')
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education4} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>All About Chemical Vapor Deposition (CVD) LGDs</h5>
                  <p>
                    Certainly! Lets get in to the method of producing lab grown
                    diamond through Chemical Vapor Deposition (CVD)
                    method:1.Carbon Source: Begin with a carbon source, often
                    methane gas, in the CVD process. 2.Reaction
                    Chamber:Introduce the carbon source into a controlled
                    chamber.3.High-Temperature Environment:at the chamber to
                    around 800°C (1,472°F), breaking down the gas into carbon
                    atoms.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate('/education/chemical-vapor-deposition')
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education5} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>All About High Pressure High Temperature (HPHT) LGDs</h5>
                  <p>
                    Certainly! Let’s explore the fascinating process of creating
                    lab-grown diamonds using the High Pressure High Temperature
                    (HPHT) method.1.Seed Diamond or Carbon Source:Begin with a
                    small natural diamond (seed diamond) or carbon source like
                    graphite.2.High-Pressure Chamber:Place the seed diamond or
                    carbon source in a high-pressure chamber.3.Application of
                    High Pressure:Seal the chamber and apply pressures up to
                    725,000 psi, simulating Earth's mantle conditions
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate('/education/high-pressure-high-temperature')
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education6} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>CVD Diamond V/S HPHT Diamond</h5>
                  <p>
                    while both CVD and HPHT methods result in high-quality
                    lab-grown diamonds, understanding their unique processes and
                    characteristics can help consumers make informed choices
                    based on their preferences and values. Whether it's the
                    controlled precision of CVD or the Earth-mimicking
                    conditions of HPHT, the world of lab-grown diamonds offers a
                    dazzling array of sustainable and ethical options for the
                    modern consumer.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate('/education/cvd-diamond-vs-hpht-diamond')
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education7} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Natural Diamond V/S Lab Grown Diamond</h5>
                  <p>
                    Certainly! Let’s explore the differences between lab-grown
                    diamonds and natural diamonds: LAB GROWN DIAMONDS and
                    NATURAL DIAMONDS identical, optical and chemical
                    characteristics same, Lab grown diamonds are created in lab,
                    we can say that grown in lab and natural diamonds are formed
                    in the earth.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate(
                        '/education/natural-diamond-vs-lab-grown-diamond',
                      )
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education8} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Diamond MM to Carat Weight Chats</h5>
                  <p>
                    Millimeters (MM) and carats are fundamental units used to
                    describe a diamond's size. Delving into the MM to Carat
                    conversion chart allows you to translate these measurements,
                    providing clarity on the physical dimensions and weight of
                    the diamond. This understanding is pivotal in selecting a
                    diamond that suits your taste and fits perfectly into your
                    jewelry design.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate('/education/diamond-mm-to-carat-weight-chats')
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education9} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Advantages of Lab Grown Diamonds</h5>
                  <p>
                    lab-grown diamonds offer a sustainable, ethical, and
                    cost-effective alternative without compromising on beauty or
                    quality. Whether you’re passionate about environmental
                    conservation or seeking an exquisite gem, lab-grown diamonds
                    are a brilliant choice! Certainly! Let’s explore the major
                    advantages of lab-grown diamonds in more detailed
                    information:
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate('/education/advantages-of-lab-grown-diamonds')
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education10} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Choosing the Perfect Engagement Ring</h5>
                  <p>
                    journey to find the perfect engagement ring is an exciting
                    and momentous step in the path to forever. In this guide,
                    we'll navigate through the key considerations and essential
                    tips to help you choose an engagement ring that not only
                    symbolizes your love but also reflects the unique style and
                    personality of your partner. Choosing an engagement ring is
                    a heartfelt journey that involves careful consideration and
                    attention to detail.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate(
                        '/education/choosing-the-perfect-engagement-ring',
                      )
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="education_box">
                <div className="eduaction_left_img">
                  <img src={Education11} alt="DiamondImg" />
                </div>
                <div className="eduaction_content">
                  <h5>Caring for Your Lab-Grown Diamond Jewelry</h5>
                  <p>
                    Caring for your lab-grown diamond jewelry ensures that its
                    brilliance and beauty endure for a lifetime. By
                    incorporating these tips into your routine, you'll not only
                    maintain the luster of your precious pieces but also create
                    a legacy of timeless elegance. Cherish your lab-grown
                    diamonds, and they will continue to sparkle as brightly as
                    your enduring love.
                  </p>
                  <Button
                    className="btn_shadow rounded-pill"
                    size="sm"
                    variant="primary"
                    onClick={() =>
                      navigate(
                        '/education/caring-for-your-lab-grown-diamond-jewelry',
                      )
                    }
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
