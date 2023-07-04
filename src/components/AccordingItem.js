export default function AccordionItem({
  curOpen,
  onOpen,
  title,
  content,
  link,
  svgTag,
  num,
}) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <>
      <div
        className={`accordion ${isOpen && 'is-open'}`}
        data-theme={title.toLowerCase()}
        onClick={handleToggle}
      >
        <div className='accordion__header'>
          <h2>
            <button>
              <span className='accordion__title'>{title}</span>
              <div className='accordion__indicator'>
                <svg className='indicator__plus' viewBox='0 0 80 80'>
                  <use href='images/sprite.svg#plus' />
                </svg>
                <svg className='indicator__minus' viewBox='0 0 80 28'>
                  <use href='images/sprite.svg#minus' />
                </svg>
              </div>
            </button>
          </h2>
        </div>
        {isOpen && (
          <div className='accordion__content'>
            <div className='accordion__inner'>
              <svg viewBox='0 0 141 65'>
                <use href={`images/sprite.svg#${svgTag}`} />
              </svg>
              <p>
                <a href={link} target='_blank'>
                  {title}
                </a>{' '}
                {content}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
