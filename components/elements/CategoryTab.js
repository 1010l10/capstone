import { useState } from "react";
import Layout from "/components/Layout/Layout";
import BlogSlider from "/components/sliders/Blog";
import Link from "next/link";

export default function CategoryTab() {
  const [active, setActive] = useState(99);
  const [showAll, setShowAll] = useState(true);

  const handleOnClick = (index) => {
    setActive(index);
    setShowAll(index === 99);
  };
  const handleResetClick = () => {
    // Perform the reset action (equivalent to clicking on "ALL")
    handleOnClick(99);
  };
  return (
    <>
      <Layout>
        <div>
          <section className="section-box-2">
            <div className="container">
              <div className="banner-hero banner-single ">
                <div className="block-banner text-center">
                  <h3 className="wow animate__animated animate__fadeInUp">
                    <span className="color-brand-2">12 Competitions</span>{" "}
                    Available Now
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <section className="section-box mt-30">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                  <div className="content-page">
                    <div className="box-filters-job">
                      <div className="row">
                        <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15"></div>
                      </div>
                    </div>
                    <div className="row" id="competition-content-1">
                      <div
                        className={`tab-pane fade ${
                          active === 1 && "show active"
                        }`}
                      >
                        <div className="row">
                          {/* 1. On-Site*/}

                          {active === 1 && (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                  <span className="flash" />
                                  <div className="image-box">
                                    <img
                                      src="assets/imgs/brands/brand-3.png"
                                      alt="jobBox"
                                    />
                                  </div>
                                  <div className="right-info">
                                    <Link legacyBehavior href="company-details">
                                      <a className="name-job">Apps 4 Digital</a>
                                    </Link>
                                    <span className="location-small">
                                      On-Site{" "}
                                    </span>
                                  </div>
                                </div>
                                <div className="card-block-info">
                                  <h6>
                                    <Link legacyBehavior href="/job-details">
                                      <a>Oversee and Govern</a>
                                    </Link>
                                  </h6>
                                  <div className="mt-5">
                                    <span className="card-briefcase">
                                      Ongoing
                                    </span>
                                    <span className="card-time">
                                      Janurary <span> 05, 2024</span>
                                    </span>
                                  </div>
                                  <p className="font-sm color-text-paragraph mt-15">
                                    Competition to stimulate new thinking from
                                    innovating young minds across the world. The
                                    goal of the competition is to develop
                                    original technology-based solutions, such as
                                    mobile applications, to both help limit the
                                    use of the internet as a domain of conflict,
                                    and to increase the stability of our online
                                    environment.
                                  </p>
                                  <div className="mt-30">
                                    <Link legacyBehavior href="/jobs-grid">
                                      <a className="btn btn-grey-small mr-5">
                                        Advanced
                                      </a>
                                    </Link>

                                    <Link legacyBehavior href="/jobs-grid">
                                      <a className="btn btn-grey-small mr-5">
                                        Individual
                                      </a>
                                    </Link>
                                    <Link legacyBehavior href="/jobs-grid">
                                      <a className="btn btn-grey-small mr-5">
                                        Strategize
                                      </a>
                                    </Link>
                                  </div>
                                  <div className="card-2-bottom mt-30">
                                    <div className="row">
                                      <div className="col-lg-7 col-7">
                                        <span className="card-text-price">
                                          $5
                                        </span>
                                        <span className="text-muted">/Fee</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/*2. onsite */}

                          {active === 1 && (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                  <span className="flash" />
                                  <div className="image-box">
                                    <img
                                      src="assets/imgs/brands/brand-4.png"
                                      alt="jobBox"
                                    />
                                  </div>
                                  <div className="right-info">
                                    <Link legacyBehavior href="company-details">
                                      <a className="name-job">
                                        Social Engineering
                                      </a>
                                    </Link>
                                    <span className="location-small">
                                      On-Site{" "}
                                    </span>
                                  </div>
                                </div>
                                <div className="card-block-info">
                                  <h6>
                                    <Link legacyBehavior href="/job-details">
                                      <a>
                                        Analyze, Investigate, & Oversee and
                                        Govern
                                      </a>
                                    </Link>
                                  </h6>
                                  <div className="mt-5">
                                    <span className="card-briefcase">
                                      Ongoing
                                    </span>
                                    <span className="card-time">
                                      Janurary<span> 05, 2024</span>
                                    </span>
                                  </div>
                                  <p className="font-sm color-text-paragraph mt-15">
                                    The Collegiate Social Engineering
                                    Capture-the-Flag (SECTF) is a competition
                                    and training event that allows students to
                                    compete in a purely social engineering
                                    intercollegiate competition and offers free
                                    training to students and educators. The
                                    Collegiate SECTF is grounded in the social
                                    sciences and offers a timely and unique
                                    platform for students to learn about social
                                    engineering in a hands-on, engaging, and
                                    ethical manner.
                                  </p>
                                  <div className="mt-30">
                                    <Link legacyBehavior href="/jobs-grid">
                                      <a className="btn btn-grey-small mr-5">
                                        Skill: Communication
                                      </a>
                                    </Link>

                                    <Link legacyBehavior href="/jobs-grid">
                                      <a className="btn btn-grey-small mr-5">
                                        Teams
                                      </a>
                                    </Link>
                                  </div>
                                  <div className="card-2-bottom mt-30">
                                    <div className="row">
                                      <div className="col-lg-7 col-7">
                                        <span className="card-text-price">
                                          $8
                                        </span>
                                        <span className="text-muted">/Fee</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/*3. on-site */}

                          {active === 1 && (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                  <span className="flash" />
                                  <div className="image-box">
                                    <img
                                      src="assets/imgs/brands/brand-90.png"
                                      alt="jobBox"
                                    />
                                  </div>
                                  <div className="right-info">
                                    <Link legacyBehavior href="company-details">
                                      <a className="name-job">Cyber Patriot</a>
                                    </Link>
                                    <span className="location-small">
                                      On-Site
                                    </span>
                                  </div>
                                </div>
                                <div className="card-block-info">
                                  <h6>
                                    <Link legacyBehavior href="/job-details">
                                      <a>
                                        Operate and Maintain & Protect and
                                        Defend
                                      </a>
                                    </Link>
                                  </h6>
                                  <div className="mt-5">
                                    <span className="card-briefcase">
                                      5 days
                                    </span>
                                    <span className="card-time">
                                      January<span> 05, 2024</span>
                                    </span>
                                  </div>
                                  <p className="font-sm color-text-paragraph mt-15">
                                    CyberPatriot is a program established for
                                    the K-12 education of students in
                                    cybersecurity by the Air Force Association.
                                    There are three branches of the program,
                                    including the National Youth Cyber Defense
                                    Competition, AFA CyberCamps, and Elementary
                                    School Cyber Education Initiative.
                                  </p>
                                  <div className="mt-30">
                                    <Link legacyBehavior href="/job-details">
                                      <a className="btn btn-grey-small mr-5">
                                        Skill: Vary
                                      </a>
                                    </Link>

                                    <Link legacyBehavior href="/job-details">
                                      <a className="btn btn-grey-small mr-5">
                                        Networking
                                      </a>
                                    </Link>

                                    <Link legacyBehavior href="/job-details">
                                      <a className="btn btn-grey-small mr-5">
                                        Teams
                                      </a>
                                    </Link>
                                  </div>
                                  <div className="card-2-bottom mt-30">
                                    <div className="row">
                                      <div className="col-lg-7 col-7">
                                        <span className="card-text-price">
                                          $Free
                                        </span>
                                        <span className="text-muted">/</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {/*4. onsite  */}

                          {active === 1 && (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                              <div className="card-grid-2 hover-up">
                                <div className="card-grid-2-image-left">
                                  <span className="flash" />
                                  <div className="image-box">
                                    <img
                                      src="assets/imgs/brands/brand-94.png"
                                      alt="jobBox"
                                    />
                                  </div>
                                  <div className="right-info">
                                    <Link legacyBehavior href="company-details">
                                      <a className="name-job">
                                        Kryptos Challenge
                                      </a>
                                    </Link>
                                    <span className="location-small">
                                      On-site
                                    </span>
                                  </div>
                                </div>
                                <div className="card-block-info">
                                  <h6>
                                    <Link legacyBehavior href="/job-details">
                                      <a>Networking, operating systems</a>
                                    </Link>
                                  </h6>
                                  <div className="mt-5">
                                    <span className="card-briefcase">
                                      Ongoing
                                    </span>
                                    <span className="card-time">
                                      December<span> 29, 2023</span>
                                    </span>
                                  </div>
                                  <p className="font-sm color-text-paragraph mt-15">
                                    SANS Cyber Aces Online is online content
                                    that teaches the core concepts needed to
                                    assess and protect information security
                                    systems. Content was developed by SANS, and
                                    includes an engaging, self-paced, easy to
                                    use combination of tutorial and videos. It’s
                                    available as open courseware so you can take
                                    it anytime. For each of the modules,
                                    competitors will participate in a national
                                    competition by taking an on-line multiple-
                                    choice quiz.
                                  </p>
                                  <div className="mt-30">
                                    <Link legacyBehavior href="/job-details">
                                      <a className="btn btn-grey-small mr-5">
                                        Skill: Vary
                                      </a>
                                    </Link>

                                    <Link legacyBehavior href="/job-details">
                                      <a className="btn btn-grey-small mr-5">
                                        Teams
                                      </a>
                                    </Link>
                                  </div>
                                  <div className="card-2-bottom mt-30">
                                    <div className="row">
                                      <div className="col-lg-7 col-7">
                                        <span className="card-text-price">
                                          $Free
                                        </span>
                                        <span className="text-muted">/</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        {/* end On-site */}
                      </div>
                      {/* */}
                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-4.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Social Engineering</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Analyze, Investigate, & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Collegiate Social Engineering
                                Capture-the-Flag (SECTF) is a competition and
                                training event that allows students to compete
                                in a purely social engineering intercollegiate
                                competition and offers free training to students
                                and educators. The Collegiate SECTF is grounded
                                in the social sciences and offers a timely and
                                unique platform for students to learn about
                                social engineering in a hands-on, engaging, and
                                ethical manner.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Communication
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-88.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Concard Challenge</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">3 days </span>
                                <span className="card-time">
                                  January <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Conrad Challenge is an annual, multi-phase
                                innovation and entrepreneurship competition that
                                encourages young adults to participate in
                                designing the future. Each year, teams of 2-5
                                students, ages 13-18, from around the world
                                create products and/or services to address some
                                of the most pressing global and local
                                challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Beginner
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-90.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Cyber Patriot</a>
                                </Link>
                                <span className="location-small">On-Site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">5 days</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CyberPatriot is a program established for the
                                K-12 education of students in cybersecurity by
                                the Air Force Association. There are three
                                branches of the program, including the National
                                Youth Cyber Defense Competition, AFA CyberCamps,
                                and Elementary School Cyber Education
                                Initiative.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-93.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">TJCTF</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>System and network administration</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                It is an online, jeopardy-style competition
                                targeted at high schoolers interested in
                                Computer Science and Cybersecurity. Participants
                                may compete on a team of up to 5 people and will
                                solve problems in categories such as Binary
                                Exploitation, Reverse Engineering, Web
                                Exploitation, Forensics, and Cryptography in
                                order to gain points.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-94.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Kryptos Challenge</a>
                                </Link>
                                <span className="location-small">On-site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Networking, operating systems</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 29, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                SANS Cyber Aces Online is online content that
                                teaches the core concepts needed to assess and
                                protect information security systems. Content
                                was developed by SANS, and includes an engaging,
                                self-paced, easy to use combination of tutorial
                                and videos. It’s available as open courseware so
                                you can take it anytime. For each of the
                                modules, competitors will participate in a
                                national competition by taking an on-line
                                multiple- choice quiz.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 24 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 2 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-1.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    America Young Scientist
                                  </a>
                                </Link>
                                <span className="location-small">Remote</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                A video Competition in which students in grades
                                5-8 in the United States are asked to create a
                                1–2-minute video describing a unique solution to
                                an everyday problem. Ten finalists are chosen to
                                compete in the National Finals.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Provision
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 2 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-88.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Concard Challenge</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">3 days </span>
                                <span className="card-time">
                                  January <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Conrad Challenge is an annual, multi-phase
                                innovation and entrepreneurship competition that
                                encourages young adults to participate in
                                designing the future. Each year, teams of 2-5
                                students, ages 13-18, from around the world
                                create products and/or services to address some
                                of the most pressing global and local
                                challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Beginner
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 2 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 2 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 2 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 2 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-93.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">TJCTF</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>System and network administration</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                It is an online, jeopardy-style competition
                                targeted at high schoolers interested in
                                Computer Science and Cybersecurity. Participants
                                may compete on a team of up to 5 people and will
                                solve problems in categories such as Binary
                                Exploitation, Reverse Engineering, Web
                                Exploitation, Forensics, and Cryptography in
                                order to gain points.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*ALL content here */}

                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-1.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    America Young Scientist
                                  </a>
                                </Link>
                                <span className="location-small">Remote</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                A video Competition in which students in grades
                                5-8 in the United States are asked to create a
                                1–2-minute video describing a unique solution to
                                an everyday problem. Ten finalists are chosen to
                                compete in the National Finals.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Provision
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-3.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Apps 4 Digital</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Competition to stimulate new thinking from
                                innovating young minds across the world. The
                                goal of the competition is to develop original
                                technology-based solutions, such as mobile
                                applications, to both help limit the use of the
                                internet as a domain of conflict, and to
                                increase the stability of our online
                                environment.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Advanced
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Strategize
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-4.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Social Engineering</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Analyze, Investigate, & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Collegiate Social Engineering
                                Capture-the-Flag (SECTF) is a competition and
                                training event that allows students to compete
                                in a purely social engineering intercollegiate
                                competition and offers free training to students
                                and educators. The Collegiate SECTF is grounded
                                in the social sciences and offers a timely and
                                unique platform for students to learn about
                                social engineering in a hands-on, engaging, and
                                ethical manner.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Communication
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-88.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Concard Challenge</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">3 days </span>
                                <span className="card-time">
                                  January <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Conrad Challenge is an annual, multi-phase
                                innovation and entrepreneurship competition that
                                encourages young adults to participate in
                                designing the future. Each year, teams of 2-5
                                students, ages 13-18, from around the world
                                create products and/or services to address some
                                of the most pressing global and local
                                challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Beginner
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-90.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Cyber Patriot</a>
                                </Link>
                                <span className="location-small">On-Site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">5 days</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CyberPatriot is a program established for the
                                K-12 education of students in cybersecurity by
                                the Air Force Association. There are three
                                branches of the program, including the National
                                Youth Cyber Defense Competition, AFA CyberCamps,
                                and Elementary School Cyber Education
                                Initiative.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-91.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">CyberQuest</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Cyber Quests are a series of cybersecurity
                                online challenges that can cover topics
                                including vulnerability analysis, forensic
                                analysis, and packet capture analysis. Each
                                quest features an artifact for analysis, along
                                with a series of quiz questions. Some quests
                                focus on a potentially vulnerable sample web
                                server as the artifact, challenging participants
                                to identify its flaws using vulnerability
                                analysis skills.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-93.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">TJCTF</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>System and network administration</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                It is an online, jeopardy-style competition
                                targeted at high schoolers interested in
                                Computer Science and Cybersecurity. Participants
                                may compete on a team of up to 5 people and will
                                solve problems in categories such as Binary
                                Exploitation, Reverse Engineering, Web
                                Exploitation, Forensics, and Cryptography in
                                order to gain points.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 99 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-94.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Kryptos Challenge</a>
                                </Link>
                                <span className="location-small">On-site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Networking, operating systems</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 29, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                SANS Cyber Aces Online is online content that
                                teaches the core concepts needed to assess and
                                protect information security systems. Content
                                was developed by SANS, and includes an engaging,
                                self-paced, easy to use combination of tutorial
                                and videos. It’s available as open courseware so
                                you can take it anytime. For each of the
                                modules, competitors will participate in a
                                national competition by taking an on-line
                                multiple- choice quiz.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*ALL content ends */}
                      {active === 23 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-1.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    America Young Scientist
                                  </a>
                                </Link>
                                <span className="location-small">Remote</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                A video Competition in which students in grades
                                5-8 in the United States are asked to create a
                                1–2-minute video describing a unique solution to
                                an everyday problem. Ten finalists are chosen to
                                compete in the National Finals.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Provision
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 23 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-3.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Apps 4 Digital</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Competition to stimulate new thinking from
                                innovating young minds across the world. The
                                goal of the competition is to develop original
                                technology-based solutions, such as mobile
                                applications, to both help limit the use of the
                                internet as a domain of conflict, and to
                                increase the stability of our online
                                environment.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Advanced
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Strategize
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 23 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-91.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">CyberQuest</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Cyber Quests are a series of cybersecurity
                                online challenges that can cover topics
                                including vulnerability analysis, forensic
                                analysis, and packet capture analysis. Each
                                quest features an artifact for analysis, along
                                with a series of quiz questions. Some quests
                                focus on a potentially vulnerable sample web
                                server as the artifact, challenging participants
                                to identify its flaws using vulnerability
                                analysis skills.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 16 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-91.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">CyberQuest</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Cyber Quests are a series of cybersecurity
                                online challenges that can cover topics
                                including vulnerability analysis, forensic
                                analysis, and packet capture analysis. Each
                                quest features an artifact for analysis, along
                                with a series of quiz questions. Some quests
                                focus on a potentially vulnerable sample web
                                server as the artifact, challenging participants
                                to identify its flaws using vulnerability
                                analysis skills.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 16 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-90.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Cyber Patriot</a>
                                </Link>
                                <span className="location-small">On-Site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">5 days</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CyberPatriot is a program established for the
                                K-12 education of students in cybersecurity by
                                the Air Force Association. There are three
                                branches of the program, including the National
                                Youth Cyber Defense Competition, AFA CyberCamps,
                                and Elementary School Cyber Education
                                Initiative.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 16 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 16 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 16 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 15 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-3.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Apps 4 Digital</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Competition to stimulate new thinking from
                                innovating young minds across the world. The
                                goal of the competition is to develop original
                                technology-based solutions, such as mobile
                                applications, to both help limit the use of the
                                internet as a domain of conflict, and to
                                increase the stability of our online
                                environment.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Advanced
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Strategize
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 15 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 15 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-4.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Social Engineering</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Analyze, Investigate, & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Collegiate Social Engineering
                                Capture-the-Flag (SECTF) is a competition and
                                training event that allows students to compete
                                in a purely social engineering intercollegiate
                                competition and offers free training to students
                                and educators. The Collegiate SECTF is grounded
                                in the social sciences and offers a timely and
                                unique platform for students to learn about
                                social engineering in a hands-on, engaging, and
                                ethical manner.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Communication
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 15 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 1. hybrid */}
                      {active === 3 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*2. hybrid */}
                      {active === 3 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-91.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">CyberQuest</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Cyber Quests are a series of cybersecurity
                                online challenges that can cover topics
                                including vulnerability analysis, forensic
                                analysis, and packet capture analysis. Each
                                quest features an artifact for analysis, along
                                with a series of quiz questions. Some quests
                                focus on a potentially vulnerable sample web
                                server as the artifact, challenging participants
                                to identify its flaws using vulnerability
                                analysis skills.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 11 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 11 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 14 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 14 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 14 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 14 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-90.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Cyber Patriot</a>
                                </Link>
                                <span className="location-small">On-Site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">5 days</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CyberPatriot is a program established for the
                                K-12 education of students in cybersecurity by
                                the Air Force Association. There are three
                                branches of the program, including the National
                                Youth Cyber Defense Competition, AFA CyberCamps,
                                and Elementary School Cyber Education
                                Initiative.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 14 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-91.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">CyberQuest</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Cyber Quests are a series of cybersecurity
                                online challenges that can cover topics
                                including vulnerability analysis, forensic
                                analysis, and packet capture analysis. Each
                                quest features an artifact for analysis, along
                                with a series of quiz questions. Some quests
                                focus on a potentially vulnerable sample web
                                server as the artifact, challenging participants
                                to identify its flaws using vulnerability
                                analysis skills.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 14 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 12 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-3.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Apps 4 Digital</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Competition to stimulate new thinking from
                                innovating young minds across the world. The
                                goal of the competition is to develop original
                                technology-based solutions, such as mobile
                                applications, to both help limit the use of the
                                internet as a domain of conflict, and to
                                increase the stability of our online
                                environment.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Advanced
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Strategize
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 12 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 13 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-1.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    America Young Scientist
                                  </a>
                                </Link>
                                <span className="location-small">Remote</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                A video Competition in which students in grades
                                5-8 in the United States are asked to create a
                                1–2-minute video describing a unique solution to
                                an everyday problem. Ten finalists are chosen to
                                compete in the National Finals.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Provision
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 13 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-88.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Concard Challenge</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">3 days </span>
                                <span className="card-time">
                                  January <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Conrad Challenge is an annual, multi-phase
                                innovation and entrepreneurship competition that
                                encourages young adults to participate in
                                designing the future. Each year, teams of 2-5
                                students, ages 13-18, from around the world
                                create products and/or services to address some
                                of the most pressing global and local
                                challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Beginner
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 13 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* competitions that cost $50 + */}

                      {active === 10 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-88.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Concard Challenge</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">3 days </span>
                                <span className="card-time">
                                  January <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Conrad Challenge is an annual, multi-phase
                                innovation and entrepreneurship competition that
                                encourages young adults to participate in
                                designing the future. Each year, teams of 2-5
                                students, ages 13-18, from around the world
                                create products and/or services to address some
                                of the most pressing global and local
                                challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Beginner
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 10 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 9 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 9 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 9 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 8 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 8 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 19 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-4.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Social Engineering</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Analyze, Investigate, & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Collegiate Social Engineering
                                Capture-the-Flag (SECTF) is a competition and
                                training event that allows students to compete
                                in a purely social engineering intercollegiate
                                competition and offers free training to students
                                and educators. The Collegiate SECTF is grounded
                                in the social sciences and offers a timely and
                                unique platform for students to learn about
                                social engineering in a hands-on, engaging, and
                                ethical manner.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Communication
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 18 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 19 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 20 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-4.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Social Engineering</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Analyze, Investigate, & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Collegiate Social Engineering
                                Capture-the-Flag (SECTF) is a competition and
                                training event that allows students to compete
                                in a purely social engineering intercollegiate
                                competition and offers free training to students
                                and educators. The Collegiate SECTF is grounded
                                in the social sciences and offers a timely and
                                unique platform for students to learn about
                                social engineering in a hands-on, engaging, and
                                ethical manner.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Communication
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 21 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 22 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/*  comopetitions that are free  */}
                      {/*1 free competition  */}
                      {active === 4 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-1.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    America Young Scientist
                                  </a>
                                </Link>
                                <span className="location-small">Remote</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                A video Competition in which students in grades
                                5-8 in the United States are asked to create a
                                1–2-minute video describing a unique solution to
                                an everyday problem. Ten finalists are chosen to
                                compete in the National Finals.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Provision
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* 2  */}
                      {active === 4 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-88.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Concard Challenge</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Securely Provision & Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">3 days </span>
                                <span className="card-time">
                                  January <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Conrad Challenge is an annual, multi-phase
                                innovation and entrepreneurship competition that
                                encourages young adults to participate in
                                designing the future. Each year, teams of 2-5
                                students, ages 13-18, from around the world
                                create products and/or services to address some
                                of the most pressing global and local
                                challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Beginner
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* 3 free compe */}
                      {active === 4 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-90.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Cyber Patriot</a>
                                </Link>
                                <span className="location-small">On-Site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">5 days</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CyberPatriot is a program established for the
                                K-12 education of students in cybersecurity by
                                the Air Force Association. There are three
                                branches of the program, including the National
                                Youth Cyber Defense Competition, AFA CyberCamps,
                                and Elementary School Cyber Education
                                Initiative.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*4. free */}
                      {active === 4 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*5. free competiton   */}
                      {active === 4 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-93.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">TJCTF</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>System and network administration</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                It is an online, jeopardy-style competition
                                targeted at high schoolers interested in
                                Computer Science and Cybersecurity. Participants
                                may compete on a team of up to 5 people and will
                                solve problems in categories such as Binary
                                Exploitation, Reverse Engineering, Web
                                Exploitation, Forensics, and Cryptography in
                                order to gain points.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*6. free competition  */}
                      {active === 4 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-94.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Kryptos Challenge</a>
                                </Link>
                                <span className="location-small">On-site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Networking, operating systems</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 29, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                SANS Cyber Aces Online is online content that
                                teaches the core concepts needed to assess and
                                protect information security systems. Content
                                was developed by SANS, and includes an engaging,
                                self-paced, easy to use combination of tutorial
                                and videos. It’s available as open courseware so
                                you can take it anytime. For each of the
                                modules, competitors will participate in a
                                national competition by taking an on-line
                                multiple- choice quiz.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* end of free conetent  */}

                      {active === 17 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-4.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Social Engineering</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Analyze, Investigate, & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Collegiate Social Engineering
                                Capture-the-Flag (SECTF) is a competition and
                                training event that allows students to compete
                                in a purely social engineering intercollegiate
                                competition and offers free training to students
                                and educators. The Collegiate SECTF is grounded
                                in the social sciences and offers a timely and
                                unique platform for students to learn about
                                social engineering in a hands-on, engaging, and
                                ethical manner.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Communication
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 17 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 18 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 18 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 19 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 18 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-90.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Cyber Patriot</a>
                                </Link>
                                <span className="location-small">On-Site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">5 days</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CyberPatriot is a program established for the
                                K-12 education of students in cybersecurity by
                                the Air Force Association. There are three
                                branches of the program, including the National
                                Youth Cyber Defense Competition, AFA CyberCamps,
                                and Elementary School Cyber Education
                                Initiative.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 18 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-91.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">CyberQuest</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Cyber Quests are a series of cybersecurity
                                online challenges that can cover topics
                                including vulnerability analysis, forensic
                                analysis, and packet capture analysis. Each
                                quest features an artifact for analysis, along
                                with a series of quiz questions. Some quests
                                focus on a potentially vulnerable sample web
                                server as the artifact, challenging participants
                                to identify its flaws using vulnerability
                                analysis skills.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 18 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-92.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Def Con</a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>All seven NICE categories</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Probably the largest cybersecurity conference,
                                DEF CON presents a wide range of contents that
                                often change from year to year. Common
                                competitions include hacking, lockpicking,
                                scavenger hunts, and the highly prestigious
                                capture the flag contest. The conference takes
                                place in Las Vegas annually.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary{" "}
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Mode: multi
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {active === 18 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-94.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Kryptos Challenge</a>
                                </Link>
                                <span className="location-small">On-site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Networking, operating systems</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 29, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                SANS Cyber Aces Online is online content that
                                teaches the core concepts needed to assess and
                                protect information security systems. Content
                                was developed by SANS, and includes an engaging,
                                self-paced, easy to use combination of tutorial
                                and videos. It’s available as open courseware so
                                you can take it anytime. For each of the
                                modules, competitors will participate in a
                                national competition by taking an on-line
                                multiple- choice quiz.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 7 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 7 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-90.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Cyber Patriot</a>
                                </Link>
                                <span className="location-small">On-Site</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">5 days</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CyberPatriot is a program established for the
                                K-12 education of students in cybersecurity by
                                the Air Force Association. There are three
                                branches of the program, including the National
                                Youth Cyber Defense Competition, AFA CyberCamps,
                                and Elementary School Cyber Education
                                Initiative.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/job-details">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">
                                      $Free
                                    </span>
                                    <span className="text-muted">/</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {active === 7 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-91.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">CyberQuest</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Cyber Quests are a series of cybersecurity
                                online challenges that can cover topics
                                including vulnerability analysis, forensic
                                analysis, and packet capture analysis. Each
                                quest features an artifact for analysis, along
                                with a series of quiz questions. Some quests
                                focus on a potentially vulnerable sample web
                                server as the artifact, challenging participants
                                to identify its flaws using vulnerability
                                analysis skills.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* competitions that cost between $1-$49 */}
                      {active === 5 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-2.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Angstromctf</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December<span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Capture-the-flag (CTF) competition hosted and
                                organized entirely by students at Montgomery
                                Blair High School! These competitions are
                                designed to educate and inspire high school
                                students through interactive hacking challenges.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Networking
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*2*/}
                      {active === 5 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-3.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Apps 4 Digital</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>Oversee and Govern</a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary <span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Competition to stimulate new thinking from
                                innovating young minds across the world. The
                                goal of the competition is to develop original
                                technology-based solutions, such as mobile
                                applications, to both help limit the use of the
                                internet as a domain of conflict, and to
                                increase the stability of our online
                                environment.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Advanced
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Strategize
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*3*/}
                      {active === 5 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-4.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Social Engineering</a>
                                </Link>
                                <span className="location-small">On-Site </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Analyze, Investigate, & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  Janurary<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Collegiate Social Engineering
                                Capture-the-Flag (SECTF) is a competition and
                                training event that allows students to compete
                                in a purely social engineering intercollegiate
                                competition and offers free training to students
                                and educators. The Collegiate SECTF is grounded
                                in the social sciences and offers a timely and
                                unique platform for students to learn about
                                social engineering in a hands-on, engaging, and
                                ethical manner.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Communication
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*4*/}
                      {active === 5 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-89.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">Capture The Flag </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  6<span> minutes ago</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                CSAW is the most comprehensive student-run
                                cybersecurity event in the world, featuring 7
                                cyber competitions, workshops, and industry
                                events. Final events are hosted by 5 global
                                academic centers.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">CTF</a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$5</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*5*/}
                      {active === 5 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-6.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">
                                    Cyber 9/12 Strategy
                                  </a>
                                </Link>
                                <span className="location-small">Online</span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Oversee and Govern
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  December <span> 30, 2023</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                The Cyber 9/12 Strategy Challenge is an annual
                                cyber policy and strategy competition where
                                students from across the globe compete in
                                developing policy recommendations tackling a
                                fictional cyber catastrophe. This one-of-a-kind
                                cyber competition is designed to provide
                                students from across academic disciplines with a
                                deeper understanding of the policy and strategy
                                challenges associated with management of
                                tradeoffs during a cyber crisis.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Investigate
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Teams
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$25</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*6*/}
                      {active === 5 && (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                          <div className="card-grid-2 hover-up">
                            <div className="card-grid-2-image-left">
                              <span className="flash" />
                              <div className="image-box">
                                <img
                                  src="assets/imgs/brands/brand-91.png"
                                  alt="jobBox"
                                />
                              </div>
                              <div className="right-info">
                                <Link legacyBehavior href="company-details">
                                  <a className="name-job">CyberQuest</a>
                                </Link>
                                <span className="location-small">Hybrid </span>
                              </div>
                            </div>
                            <div className="card-block-info">
                              <h6>
                                <Link legacyBehavior href="/job-details">
                                  <a>
                                    Operate and Maintain & Protect and Defend
                                  </a>
                                </Link>
                              </h6>
                              <div className="mt-5">
                                <span className="card-briefcase">Ongoing</span>
                                <span className="card-time">
                                  January<span> 05, 2024</span>
                                </span>
                              </div>
                              <p className="font-sm color-text-paragraph mt-15">
                                Cyber Quests are a series of cybersecurity
                                online challenges that can cover topics
                                including vulnerability analysis, forensic
                                analysis, and packet capture analysis. Each
                                quest features an artifact for analysis, along
                                with a series of quiz questions. Some quests
                                focus on a potentially vulnerable sample web
                                server as the artifact, challenging participants
                                to identify its flaws using vulnerability
                                analysis skills.
                              </p>
                              <div className="mt-30">
                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Skill: Vary
                                  </a>
                                </Link>

                                <Link legacyBehavior href="/jobs-grid">
                                  <a className="btn btn-grey-small mr-5">
                                    Individual
                                  </a>
                                </Link>
                              </div>
                              <div className="card-2-bottom mt-30">
                                <div className="row">
                                  <div className="col-lg-7 col-7">
                                    <span className="card-text-price">$8</span>
                                    <span className="text-muted">/Fee</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/*2*/}
                    </div>
                  </div>
                </div>
                {/* Advanced Filter  */}
                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                  <div className="sidebar-shadow none-shadow mb-30">
                    <div className="sidebar-filters">
                      <div className="filter-block head-border mb-30">
                        <h5>
                          Advance Filter
                          <span
                            className="link-reset"
                            onClick={handleResetClick}
                          >
                            Reset
                          </span>
                        </h5>
                      </div>
                      <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">
                          Display Competitions
                        </h5>
                        <div className="form-group">
                          <ul className="list-checkbox">
                            {" "}
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 99 ? "active" : ""}
                                  onClick={() => handleOnClick(99)}
                                />
                                <span className="text-small">ALL</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">12</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Onsite/Remote</h5>
                        <div className="form-group">
                          {/*on site  */}
                          <ul className="list-checkbox">
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 1 ? "active" : ""}
                                  onClick={() => handleOnClick(1)}
                                />
                                <span className="text-small">On-site</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">4</span>
                            </li>

                            {/* remote  */}

                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 2 ? "active" : ""}
                                  onClick={() => handleOnClick(2)}
                                />
                                <span className="text-small">Remote</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">6</span>
                            </li>

                            {/* hybrid */}

                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 3 ? "active" : ""}
                                  onClick={() => handleOnClick(3)}
                                />
                                <span className="text-small">Hybrid</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">2</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-block mb-20">
                        <h5 className="medium-heading mb-25">
                          Competition Cost
                        </h5>
                        <div className="form-group mb-20">
                          <ul className="list-checkbox">
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 4 ? "active" : ""}
                                  onClick={() => handleOnClick(4)}
                                />
                                <span className="text-small">Free</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">6</span>
                            </li>

                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 5 ? "active" : ""}
                                  onClick={() => handleOnClick(5)}
                                />
                                <span className="text-small">$1-$49</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">6</span>
                            </li>

                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 6 ? "active" : ""}
                                  onClick={() => handleOnClick(6)}
                                />
                                <span className="text-small">$50+</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">0</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Type</h5>
                        <div className="form-group">
                          <ul className="list-checkbox">
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 7 ? "active" : ""}
                                  onClick={() => handleOnClick(7)}
                                />
                                <span className="text-small">Blue</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">3</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 8 ? "active" : ""}
                                  onClick={() => handleOnClick(8)}
                                />
                                <span className="text-small">Red</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">2</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 9 ? "active" : ""}
                                  onClick={() => handleOnClick(9)}
                                />
                                <span className="text-small">CTF</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">3</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">Level</h5>
                        <div className="form-group">
                          <ul className="list-checkbox">
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 10 ? "active" : ""}
                                  onClick={() => handleOnClick(10)}
                                />
                                <span className="text-small">Beginner</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">2</span>
                            </li>

                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 11 ? "active" : ""}
                                  onClick={() => handleOnClick(11)}
                                />
                                <span className="text-small">Intermediate</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">2</span>
                            </li>

                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 12 ? "active" : ""}
                                  onClick={() => handleOnClick(12)}
                                />
                                <span className="text-small">Advanced</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">2</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">NICE Framework</h5>
                        <div className="form-group">
                          <ul className="list-checkbox">
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 13 ? "active" : ""}
                                  onClick={() => handleOnClick(13)}
                                />
                                <span className="text-small">
                                  Secure Provision
                                </span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">3</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 14 ? "active" : ""}
                                  onClick={() => handleOnClick(14)}
                                />
                                <span className="text-small">
                                  Operate and Maintain
                                </span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">6</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 15 ? "active" : ""}
                                  onClick={() => handleOnClick(15)}
                                />
                                <span className="text-small">
                                  Oversee and Govern
                                </span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">4</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 16 ? "active" : ""}
                                  onClick={() => handleOnClick(16)}
                                />
                                <span className="text-small">
                                  Protect and Defend
                                </span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">5</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 17 ? "active" : ""}
                                  onClick={() => handleOnClick(17)}
                                />
                                <span className="text-small">Analyze</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">1</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 18 ? "active" : ""}
                                  onClick={() => handleOnClick(18)}
                                />
                                <span className="text-small">Operate</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">7</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 19 ? "active" : ""}
                                  onClick={() => handleOnClick(19)}
                                />
                                <span className="text-small">Investigate</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">3</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-block mb-30">
                        <h5 className="medium-heading mb-10">
                          Competition Posted
                        </h5>
                        <div className="form-group">
                          <ul className="list-checkbox">
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 20 ? "active" : ""}
                                  onClick={() => handleOnClick(20)}
                                />
                                <span className="text-small">1 day</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">1</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 21 ? "active" : ""}
                                  onClick={() => handleOnClick(21)}
                                />
                                <span className="text-small">7 days</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">1</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 22 ? "active" : ""}
                                  onClick={() => handleOnClick(22)}
                                />
                                <span className="text-small">30 days</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">1</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-block mb-20">
                        <h5 className="medium-heading mb-15">Mode</h5>
                        <div className="form-group">
                          <ul className="list-checkbox">
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 23 ? "active" : ""}
                                  onClick={() => handleOnClick(23)}
                                />
                                <span className="text-small">Individual</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">3</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input
                                  type="checkbox"
                                  checked={active === 24 ? "active" : ""}
                                  onClick={() => handleOnClick(24)}
                                />
                                <span className="text-small">Teams</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">9</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End: Advanced Filter  */}
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
