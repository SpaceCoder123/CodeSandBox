function ConditionalArgument() {
  let age = 11;
  return (
    <>
      {age < 18 ? (
        <h3> U are not elgibile since your age is lesser than 18 </h3>
      ) : (
        <h3> U are elgibile since you are above age 18 </h3>
      )}
    </>
  );
}
export default ConditionalArgument;
