import { View } from 'react-native';
import { DuiInfo } from '../DuiInfo';

import { styles } from './styles';

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[],
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
}

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <DuiInfo
        label="Nome"
        value={data.name}
      />
      <DuiInfo
        label="Tempo de Jogo"
        value={`${data.yearsPlaying} anos`}
      />
      <DuiInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuiInfo
        label="Nome"
        value="Lucas"
      />
    </View>
  );
}