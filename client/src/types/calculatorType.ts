export type CalculatorType = {
    id: number;
    amountMachine: number;
    machine: string;
    time: number;
    path: number;
    amountLoader: number;
    workTime: number;
    box: number;
    roll: number;
    scotch: number;
    stretchRoll: number;
  };
  
 
  export type CalculatorAutoType = Omit<CalculatorType, 'id' | 'amountLoader' | 'workTime' | 'box' | 'roll' | 'scotch' | 'stretchRoll'>;
  export type CalculatorLoaderType = Omit<CalculatorType, 'id' | 'amountMachine' | 'machine' | 'time' | 'path' | 'box' | 'roll' | 'scotch' | 'stretchRoll'>;
  export type CalculatorPackageType = Omit<CalculatorType, 'id' | 'amountMachine' | 'machine' | 'time' | 'path' | 'amountLoader' | 'workTime'>;