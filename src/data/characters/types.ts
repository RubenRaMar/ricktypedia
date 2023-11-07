import { InfoStructure } from "../info/types";

export interface NameStructure {
  name: string;
  url: string;
}

export interface CharacterStructure {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: NameStructure;
  location: NameStructure;
  image: string;
  episode: string[];
  created: string;
  url: string;
}

export interface CharacterApiStateStructure {
  results: CharacterStructure[];
  info: InfoStructure;
}

export interface CharacterStateStructure extends CharacterApiStateStructure {
  characterData: CharacterStructure;
}
