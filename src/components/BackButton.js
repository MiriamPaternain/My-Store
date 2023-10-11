function BackButton() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <button onClick={goBack} className='backButton'>
        <span role='img' aria-label='Back Arrow' className='backButton_arrow'>
          &#8592;
        </span>{' '}
        Back
      </button>
    </>
  );
}

export default BackButton;
