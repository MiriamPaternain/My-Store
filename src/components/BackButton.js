function BackButton() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={goBack}>
        <span role='img' aria-label='Back Arrow'>
          &#8592;
        </span>{' '}
        Back
      </button>
    </>
  );
}
