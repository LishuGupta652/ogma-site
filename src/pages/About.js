import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "../styles/globalStyled";

const About = () => {
  return (
    <AboutStyled>
      <Header />
      <Container>
        <div className="about-content">
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 72, opacity: 0 }}
            transition={{ delay: 0.4, ease: "easeInOut" }}
          >
            <motion.h3
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 72, opacity: 0 }}
              transition={{ delay: 0.5, ease: "easeOut" }}
            >
              The Ogma is a Personality Development Club. The word Ogma is
              driven from the Greek goddess who blessed human race with blessing
              of communication. "THE OGMA" aims at enhancing the soft skills of
              the students. It conducts workshop and events for the young
              aspirants to furnish their communication skills and get over their
              stage fear. The workshop includes different fun activities to make
              them realize the importance of concepts like team work.
            </motion.h3>
            <motion.h4
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 72, opacity: 0 }}
              transition={{ delay: 0.6, ease: "easeOut" }}
            >
              With our generation moving towards earning a handsome living and
              preparing ourselves to stand against myriad competencies of this
              world, THE OGMA stands to affirm to introduce and make familiar
              the etiquettes and ethics of a professional environment. THE OGMA
              is an initiative pledged to bring out the best possible characters
              out of an individual where we do not develop anyone's personality,
              we bring forth what they have hidden beneath those layers of
              demure. ⁠⁠⁠⁠⁠⁠⁠⁠ The OGMA in pursuit of achieving its motive as
              described above, organises various activities and workshops
              focusing on the domains like:
            </motion.h4>

            <motion.ul
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 72, opacity: 0 }}
              transition={{ delay: 0.7, ease: "easeOut" }}
            >
              <li>Personality Development</li>
              <li>Communication Skills</li>
              <li>Enhancement Workshops</li>
              <li>Departmental Magazines</li>
              <li>Group Discussion Forum</li>
              <li>Presentation Techniques</li>
              <li></li>
            </motion.ul>

            <motion.h4
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 72, opacity: 0 }}
              transition={{ delay: 0.8, ease: "easeOut" }}
            >
              Also in the workshops of The OGMA members are made aware of the
              difference between Communication skills and the knowledge of the
              language, also organising some ice-breaking events to enthusiast
              members and open them up so that they take part in events with
              their own will and giving them the opportunity to come forth and
              present themselves (via public speaking) and eliminate
              Glossophobia.
            </motion.h4>
          </motion.div>
        </div>
      </Container>
    </AboutStyled>
  );
};

export default About;

const AboutStyled = styled.div`
  .about-content {
    margin-top: 100px;
  }

  h3 {
    padding: 40px;
    font-size: 1.2em;
  }
  h4 {
    padding: 40px;
    font-size: 1.2em;
  }
  ul {
    padding: 40px;
    font-size: 1.2em;
  }
`;
