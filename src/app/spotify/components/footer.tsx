'use client';

import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Progress, Tooltip } from 'antd';
import { PlayCircleOutlined, StepBackwardOutlined, StepForwardOutlined, PauseCircleOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player';
import { Howl } from 'howler';
const BtnPlay: React.FC = () => {
  const [audio, setAudio] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const sound = new Howl({
      src: ['http://localhost:3001/stream/song_one.mp3'],
      autoplay: false,
      loop: true,
      volume: 0.5, // ตั้งค่าระดับเสียง
    });

    // เก็บ instance ของ Howl ไว้ใน state
    setAudio(sound);

    return () => {
      // เมื่อคอมโพเนนต์ถูกทำลาย ให้หยุดเสียง
      sound.unload();
    };
  }, []);

  // ฟังก์ชัน toggle เพื่อเล่น/หยุดเสียง
  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };


  return (
    <Row className="flex justify-center">
      <Col span={10}>
        <div className="flex justify-center items-center">
          <Tooltip title="Prev">
            <Button
              type="primary"
              shape="circle"
              icon={<StepBackwardOutlined style={{ fontSize: '22px', color: '#b3b3b3' }} />}
              style={{ backgroundColor: "#000000", borderColor: "#000000", color: "#b3b3b3" }}
            />
          </Tooltip>

          {isPlaying ?
            <Tooltip title="Pause">
              <Button
                type="primary"
                shape="circle"
                icon={<PauseCircleOutlined style={{ fontSize: '40px', color: '#b3b3b3' }} />}
                size="large"
                style={{ backgroundColor: "#000000", borderColor: "#000000", color: "#b3b3b3" }}
                onClick={togglePlay}
              />
            </Tooltip>
            :
            <Tooltip title="Play">
              <Button
                type="primary"
                shape="circle"
                icon={<PlayCircleOutlined style={{ fontSize: '40px', color: '#b3b3b3' }} />}
                size="large"
                style={{ backgroundColor: "#000000", borderColor: "#000000", color: "#b3b3b3" }}
                onClick={togglePlay}
              />
            </Tooltip>
          }


          <Tooltip title="Next">
            <Button
              type="primary"
              shape="circle"
              icon={<StepForwardOutlined style={{ fontSize: '22px', color: '#b3b3b3' }} />}
              style={{ backgroundColor: "#000000", borderColor: "#000000", color: "#b3b3b3" }}
            />
          </Tooltip>
        </div>

        <Row className="items-center">
          <Col span={3} className="flex items-center justify-center h-full">
            <div className="p-2 text-white">{'-:--'}</div>
          </Col>
          <Col span={18} className="flex items-center h-full">
            <Progress percent={99.9} strokeColor={twoColors} format={() => ""} className="w-full" />
          </Col>
          <Col span={3} className="flex items-center justify-center h-full">
            <div className="p-2 text-white">{'-:--'}</div>
          </Col>
        </Row>

        {/* {audioUrl && (
          <ReactPlayer
            url={audioUrl}
            playing={isPlaying} 
            controls
            width="100%"
            height="50px"
            onReady={handleReady} 
          />
        )} */}
      </Col>
    </Row>
  );
};

const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};

export default BtnPlay;
