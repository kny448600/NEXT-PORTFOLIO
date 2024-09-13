import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Lottie from 'react-lottie-player';
import lottiejson from '/public/mainpage.json';
import styles from './mainpage.module.css';
import { useRouter } from "next/router";

export default function Mainpage() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/projects');
    }
    return (
        <div className={styles.wrapper}>
                <Grid container spacing={10}>
                    <Grid size={4}>
                        <div className={styles.introduce}>
                            <h2 style={{fontSize:'45px'}}>안녕하세요!</h2>
                            <p>
                            안녕하세요, 저는 충주 상업고등학교를 재학중인 2학년 하상현입니다. 패션쪽으로 활동하며 패션디자인에 전문성을 가지고 있습니다. 상이나 경험을 바탕으로 본래디자인에서 상상을 추가하여 이상적인 디자인를 추구하고 있습니다. 감사합니다.</p>
                            <Button variant="contained" onClick={handleClick}>프로젝트보러가기</Button>
                        </div>
                    </Grid>
                    <Grid size={8}>
                    <div>
                        <Lottie
                            loop
                            animationData={lottiejson}
                            play
                        />
                    </div>
                    </Grid>
                </Grid>
                </div>
    )
}