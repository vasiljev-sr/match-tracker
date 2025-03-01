import { TMatchStatus } from '../components/CardStatus/types.ts';
import useSWR from 'swr';

export const BASE_API_URL = 'https://app.ftoyd.com/fronttemp-service';

export const MATCH_API_KEY =  `matches`

export interface MatchItem {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: TMatchStatus;
  time: string;
  title: string;
}

export interface Player {
  kills: number;
  username: string;
}
export interface Team {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}

export interface ApiMatchesResponse {
  ok: boolean;
  data: {
    matches: MatchItem[];
  };
}

const fetchMatches = async (): Promise<ApiMatchesResponse> => {
  const response = await fetch(`${BASE_API_URL}/fronttemp`);
  return response.json();
};

export function useMatches() {
  const { data, error, isLoading } = useSWR<ApiMatchesResponse>(
    MATCH_API_KEY,
    fetchMatches,
  );

  return {
    matches: data,
    isLoading,
    error,
  };
}
