const CeilingFan = require('./fan'); 

test('Initial state should be off and clockwise', () => {
  const fan = new CeilingFan();
  expect(fan.getStatus()).toEqual({ speed: 0, direction: 'clockwise' });
});

test('Pulling speed cord should increase speed and reset after max speed', () => {
  const fan = new CeilingFan();
  
  fan.pullSpeedCord();
  expect(fan.getStatus()).toEqual({ speed: 1, direction: 'clockwise' });

  fan.pullSpeedCord();
  expect(fan.getStatus()).toEqual({ speed: 2, direction: 'clockwise' });

  fan.pullSpeedCord();
  expect(fan.getStatus()).toEqual({ speed: 3, direction: 'clockwise' });

  fan.pullSpeedCord();
  expect(fan.getStatus()).toEqual({ speed: 0, direction: 'clockwise' });
});

test('Pulling direction cord should reverse direction', () => {
  const fan = new CeilingFan();
  
  fan.pullDirectionCord();
  expect(fan.getStatus()).toEqual({ speed: 0, direction: 'counterclockwise' });

  fan.pullDirectionCord();
  expect(fan.getStatus()).toEqual({ speed: 0, direction: 'clockwise' });
});
