import { Request, Response } from 'express';

const getData = (req: Request, res: Response) => {
  res.json([
    { year: 2010, name: '省控线', value: 515 },
    { year: 2011, name: '省控线', value: 531 },
    { year: 2012, name: '省控线', value: 547 },
    { year: 2013, name: '省控线', value: 517 },
    { year: 2014, name: '省控线', value: 526 },
    { year: 2015, name: '省控线', value: 540 },
    { year: 2016, name: '省控线', value: 529 },
    { year: 2017, name: '省控线', value: 503 },
    { year: 2018, name: '省控线', value: 527 },
    { year: 2019, name: '省控线', value: 522 },
    { year: 2010, name: '录取线', value: 520 },
    { year: 2011, name: '录取线', value: 533 },
    { year: 2012, name: '录取线', value: 547 },
    { year: 2013, name: '录取线', value: 521 },
    { year: 2014, name: '录取线', value: 527 },
    { year: 2015, name: '录取线', value: 541 },
    { year: 2016, name: '录取线', value: 535 },
    { year: 2017, name: '录取线', value: 535 },
    { year: 2018, name: '录取线', value: 568 },
    { year: 2019, name: '录取线', value: 564 },
    { year: 2010, name: '投档线', value: 520 },
    { year: 2011, name: '投档线', value: 534 },
    { year: 2012, name: '投档线', value: 553 },
    { year: 2013, name: '投档线', value: 528 },
    { year: 2014, name: '投档线', value: 540 },
    { year: 2015, name: '投档线', value: 556 },
    { year: 2016, name: '投档线', value: 555 },
    { year: 2017, name: '投档线', value: 535 },
    { year: 2018, name: '投档线', value: 569 },
    { year: 2019, name: '投档线', value: 564 },
  ]);
};

export default {
  'GET /api/lines': getData,
};
