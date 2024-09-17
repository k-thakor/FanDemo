class CeilingFan {
  constructor() {
    this.speed = 0; // initial speed is off (0)
    this.direction = "clockwise"; // initial direction
    this.MAX_SPEED = 3; // max speed is 3
    this.reversed = false; // indicates whether the direction is reversed
  }

  // Increases the speed, resets to 0 after reaching max speed
  pullSpeedCord() {
    if (this.speed === this.MAX_SPEED) {
      this.speed = 0; // Reset to off after reaching max speed
    } else {
      this.speed += 1; // Increment speed
    }
  }

  // Reverses the direction of the fan
  pullDirectionCord() {
    this.reversed = !this.reversed; // Toggle the reversed state
    this.direction = this.reversed ? "counterclockwise" : "clockwise";
  
  }

  // Get current fan status (speed and direction)
  getStatus() {
    return {
      speed: this.speed,
      direction: this.direction
    };
  }
}

const fan = new CeilingFan();

function updateStatus() {
  document.getElementById('speed').textContent = fan.getStatus().speed;
  document.getElementById('direction').textContent = fan.getStatus().direction;
}

// Event listeners for the buttons
document.getElementById('speedCord').addEventListener('click', () => {
  fan.pullSpeedCord();
  updateStatus();
});

document.getElementById('directionCord').addEventListener('click', () => {
  fan.pullDirectionCord();
  updateStatus();
});

// Initialize the status display
updateStatus();
