import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// for inheritance
// const reader = new MatchReader('football.csv');
// reader.read();

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildandPrintReport(matchReader.matches);
