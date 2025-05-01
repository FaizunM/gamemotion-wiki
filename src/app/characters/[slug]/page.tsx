import { CharacterBanner } from "@/components/molecules/banner";
import { CharacterTab } from "@/components/organims/character-tab";
import { ICharacter } from "@/interfaces/global";
import { ExampleCharacter } from "@/test/examples/character";

export default function CharacterPage() {
  const Character: ICharacter = ExampleCharacter;
  return (
    <>
      <CharacterBanner data={Character} />
      <CharacterTab data={Character} />
    </>
  );
}
