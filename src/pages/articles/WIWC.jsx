import React from 'react';
import Pagefoot from '../Pagefoot';
function WIWC() {

    return (
    <div>
        <center>
            <p className='articletitle'>Why I don't write these articles (or post my contents) in Chinese?</p>
        </center>
        <hr className='divideline'></hr>

        <p>
        The answer could be quite simple. Avoiding my site appeared in the results of search in Chinese, cutting down the possibility of being searched. I don’t hold much confidence in my English writing. You may found a lot grammar or spelling mistakes in other articles before click in to this webpage. So there must be other triggers let me do that.
        </p>
        <p >
        1.	My hobby has a gray status in China.
        </p>
        <p >
        Why I say it is a gray hobby? Gray is between bright and dark, white and black, also used to describe legal and illegal. Decades ago listening some foreign shortwave stations could be sentenced. Especially in Cultural Revolution period. The history of Chinese people can own a shortwave radio freely isn’t too long. Meanwhile in Japan, our neighbour, shortwave listening activities and several clubs were prosperously developed. We had great amount of radio listeners at that time, but any culture of radio was never formed. Shortwave listening hobby didn’t get accepted to Chinese society.
        </p>
        <p >
        2.	Terrible atmosphere in the circle of this hobby in China.
        </p>
        <p >
        We have some group chats and the owners were older persons who have decades of listening radio stations. They received lots of letters from stations that lives till now or from some stations already gone to dust for twenty years. One day when we talked about utility stations, an authoritative older said discussing these stations were “ulterior motives”. Several years ago there’s a good public account where great articles from listeners were updated. I contributed several articles too. After 2 years the account was reported and we finally lost this great platform. Both these were strikes to me. From then I refused to contribute any contents related to my hobby in Chinese. 
        </p>
        <p >
        3.	Severely judging someone’s word correct or not by the person’s status.
        </p>
        <p >
        Maybe this is a common problem of humankind or just in East Asian cultures especially China. When reading or listening, they want to know who said that, then make judgements. This reflects their poor ability of judging right and wrong.
        </p>
        <center>
            <img className='pic1' src='\wiwcpic\pic1.jpg' alt='roadsign in hongkong' style={{
                maxWidth:'300px',
                maxHeight:'230px'
            }}></img>
            <p className='imagetitle'>There's much difference between traditional Chinese and simplified.</p>
        </center>
        <p >
        Also, some Chinese people from mainland started to use traditional Chinese in social platforms instead of simplified Chinese but when they writing traditional characters, they can’t write some characters such as dragon and turtle in traditional Chinese. These characters are too complexed. They never have grasp of the skill of using traditional Chinese. They just to pretend, making a disconnection with their cultural roots in Chinese mainland. English is widely used in academic, trading and other global communications. For me, English is a neutral tool for voice out our opinions, thought and experiences to the world. Our culture roots still deep in soil of simplified Chinese. 
        </p>
        <Pagefoot towhere={'/others'} date={'19 Jan 2025'}/>
    </div>
  );
}

export default WIWC;
