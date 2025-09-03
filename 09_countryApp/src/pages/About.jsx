import countryData from "../../src/api/countryData.json";
export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">
        {countryData.map((curElem) => {
            const{countryId,countryName,capital,population,language,interestingFact} = curElem
          return (
            <div className="card" key={countryId}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{countryName}</p>
                <p>
                  <span className="card-description">captial:</span>
                  {capital}
                </p>

                <p>
                  <span className="card-description">population:</span>
                  {population}
                </p>

                <p>
                  <span className="card-description">Language:</span>
                  {language}
                </p>

                <p>
                  <span className="card-description">Intresting Fact:</span>
                  {interestingFact > 40 ? interestingFact.slice(0, 10) : interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
