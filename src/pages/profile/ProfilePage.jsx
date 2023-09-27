import { useLoaderData } from "react-router-dom";
import DetailsList from "./components/DetailsList";
import "./ProfilePage.css"

const url = "https://rickandmortyapi.com/api/character/";

async function getProfile(profileId) {
  return await fetch(url + profileId)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Hiba a kérés során");
      }

      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error("Hiba történt:", error);
    });
}

export async function loader({ params }) {
  const profile = await getProfile(params.profileId);
  return { profile };
}

export default function ProfilePage() {
  const { profile } = useLoaderData();

  return (
    <div className="profilePageContainer">
      <div className="profileImageContainer">
        <img className="profileImage" src={profile.image} />
      </div>
      <div className="detailsList">
      <DetailsList className="detailsList" profile={profile} />
      </div>
    </div>
  );
}
