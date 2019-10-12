import React, { Component } from "react";
import Flag from "./Flag";

class SectionStudents extends Component {
  static defaultProps = {
    squad: [
      {
        firstName: "Aida",
        country: "fr",
        githubUsername: "AidaBej",
        gender: "female"
      },
      {
        firstName: "Aimée",
        country: "fr",
        githubUsername: "aimeestone",
        gender: "female"
      },
      {
        firstName: "Alexandre",
        country: "fr",
        githubUsername: "Alexandre2590",
        gender: "male"
      },
      {
        firstName: "Anais",
        country: "fr",
        githubUsername: "anaislor",
        gender: "female"
      },
      {
        firstName: "Antonin",
        country: "fr",
        githubUsername: "gramsco",
        gender: "male"
      },
      {
        firstName: "Doro",
        country: "de",
        githubUsername: "DoriDoro",
        gender: "female"
      },
      {
        firstName: "Henri",
        country: "be",
        githubUsername: "belke05",
        gender: "male"
      },
      {
        firstName: "Julie",
        country: "fr",
        githubUsername: "juliecarra",
        gender: "female"
      },
      {
        firstName: "Justine",
        country: "fr",
        githubUsername: "Juddorange",
        gender: "female"
      },
      {
        firstName: "Loup",
        country: "fr",
        githubUsername: "Loupiaut",
        gender: "male"
      },
      {
        firstName: "Margaux",
        country: "fr",
        githubUsername: "MargauxGibert15",
        gender: "female"
      },
      {
        firstName: "Niraja",
        country: "np",
        githubUsername: "niraja426",
        gender: "female"
      },
      {
        firstName: "Sadri",
        country: "tn",
        githubUsername: "sadrisellami",
        gender: "male"
      },
      {
        firstName: "Sara",
        country: "fr",
        githubUsername: "SebHacker",
        gender: "female"
      },
      {
        firstName: "Sophie-Anne",
        country: "fr",
        githubUsername: "sophieannebourgine",
        gender: "female"
      },
      {
        firstName: "Xavier",
        country: "fr",
        githubUsername: "SandwichExpert",
        gender: "male"
      }
    ]
  };
  render() {
    const { squad } = this.props;

    /* Display firstName
    const firstNameMap = squad.map((student, i) => (
      <li key={i}>{student.firstName}</li>
    ));
    */

    const countryMap = squad.map((student, i) => (
      <Flag key={i} country={student.country} />
    ));

    const githubURL = "https://github.com/";
    const githubUsernameMap = squad.map((student, i) => (
      <a
        href={githubURL + student.githubUsername}
        key={i}
        rel="noopener noreferrer"
        target="_blank"
      >
        {student.githubUsername}
      </a>
    ));

    const firstNameGenderMap = squad.map((student, i) => (
      <td
        key={student.firstName}
        style={{ color: student.gender === "male" ? "#1e2434" : "#32c3ff" }}
        className="firstName"
      >
        {student.firstName}
      </td>
    ));
    return (
      <div>
        <h1>Students</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>GitHub</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {firstNameGenderMap}
              <td>{countryMap}</td>
              <td className="github">{githubUsernameMap}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SectionStudents;
