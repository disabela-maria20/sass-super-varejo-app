type Colunista = {
  id: number;
  name: string;
  textMin: string;
  textModal: string;
  image: string;
};

export function Colunistas() {
  const modals = {};

  const GetColunistas = async (): Promise<void> => {
    try {
      const response = await fetch("/assets/json/colunistas.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Colunista[] = await response.json();
      PutOnGrid(data);
    } catch (error) {
      console.error("Error fetching colunistas:", error);
    }
  };

  GetColunistas();

  const PutOnGrid = (data: Colunista[]) => {
    const columnists_grid = document.querySelector(".columnists_grid");
    for (const cols of data) {
      PutModal(cols);
      columnists_grid.innerHTML += `
        <div class="media container_area">
          <div class="container_img">
            <img src="./assets/images/970X250_(100_×_100_px).png" class="mr-3 rounded" alt="...">
          </div>
          <div class="media-body">
            <h5 class="mt-0">${cols.name}</h5>
            <p>${cols.textMin} <a data-toggle="modal" data-target="#ModalLong-${cols.id}">leia mais</a></p>
          </div>
        </div>
      `;
      modals[cols.id] = cols;
    }
  };

  const PutModal = (cols: Colunista) => {
    console.log(modals);

    const area_modal = document.querySelector(".area_modal");
    area_modal.innerHTML += `
    <div class="modal fade" id="ModalLong-${cols.id}" tabindex="-1" role="dialog" aria-labelledby="modal-${cols.id}" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modal-${cols.id}">${cols.name}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">${cols.textModal}</div>
          <div class="modal-footer">
            <button type="button" class=" btn-modal" data-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
    `;
  };
}
