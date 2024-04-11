import Link from "./Link/Link";
import "./homelinks.css";

const HomeLinks = () => {
  return (
    <div className="widget home-links">
      <h4>Snabblänkar</h4>
      <ul>
        <Link
          title="aftonbladet"
          imgSrc="src/img/HomeLinks/aftonbladet.png"
          link="https://www.aftonbladet.se/"
        />
        <Link
          title="food & Co"
          imgSrc="src/img/HomeLinks/food_&_co.png"
          link="https://www.foodandco.se/restauranger/restauranger/kista/"
        />
        <Link
          title="Calabrio"
          imgSrc="src/img/HomeLinks/calabrio.png"
          link="https://mytime.comhem.com/TeleoptiWFM/Web/SSO/OpenId/Provider?openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=https%3A%2F%2Fmytime.comhem.com%2FTeleoptiWFM%2FAuthenticationBridge%2Fresponse%3Fdnoa.userSuppliedIdentifier%3Dhttp%253A%252F%252Fsrvwtoweb02%252FTeleoptiWFM%252FWeb%252Fsso&openid.realm=https%3A%2F%2Fmytime.comhem.com%2FTeleoptiWFM%2FAuthenticationBridge%2F&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
        />
      </ul>
    </div>
  );
};

export default HomeLinks;
