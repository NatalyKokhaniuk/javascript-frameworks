function processInput(message: string, count: number=1): void {
    console.log(`Message: ${message}`);
    console.log(`Count: ${count}`);
    for (let i = 0; i < count; i++) {
      console.log(message);
    }
  }

  processInput.call(null,"Message");
  processInput.call(null,"Message2",5);
  processInput.call(null,"Message3",7);