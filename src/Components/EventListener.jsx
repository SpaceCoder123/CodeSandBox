function EventListener() {
  function onClickButton(val) {
    alert(
      "You have clicked the " + val + " button from EventListener.jsx file"
    );
  }
  return (
    <>
      <button onClick={() => onClickButton("Btn1")}>Button1</button>
    </>
  );
}

export default EventListener;
