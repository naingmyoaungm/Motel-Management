const rooms = [
    { id: '101', price: 5000, status: 'ရှင်းပြီး', booked: false },
    { id: '201', price: 5000, status: 'ရှင်းပြီး', booked: false },
    { id: '102', price: 8500, status: 'ရှင်းပြီး', booked: false },
    { id: '103', price: 8500, status: 'ရှင်းပြီး', booked: false },
    { id: '202', price: 8500, status: 'ရှင်းပြီး', booked: false },
    { id: '203', price: 8500, status: 'ရှင်းပြီး', booked: false },
    { id: '204', price: 8500, status: 'ရှင်းပြီး', booked: false },
    { id: 'SR,101', price: 13000, status: 'ရှင်းပြီး', booked: false },
    { id: 'SR,201', price: 13000, status: 'ရှင်းပြီး', booked: false },
    { id: 'SR,204', price: 13000, status: 'ရှင်းပြီး', booked: false },
    { id: 'SR,102', price: 17000, status: 'ရှင်းပြီး', booked: false },
    { id: 'SR,103', price: 17000, status: 'ရှင်းပြီး', booked: false },
    { id: 'SR,202', price: 19000, status: 'ရှင်းပြီး', booked: false },
    { id: 'SR,203', price: 19000, status: 'ရှင်းပြီး', booked: false },
    { id: 'SR,205', price: 19000, status: 'ရှင်းပြီး', booked: false },
  ];
  
  const roomListContainer = document.getElementById('roomList');
  
  function renderRooms() {
    roomListContainer.innerHTML = '';
    rooms.forEach(room => {
      const roomDiv = document.createElement('div');
      roomDiv.className = 'bg-white p-4 rounded shadow';
  
      if (room.booked) {
        roomDiv.classList.add('bg-red-200');
      }
  
      roomDiv.innerHTML = `
        <div class="flex justify-between">
          <span class="font-bold text-2xl">အခန်း - ${room.id}</span>
          <span class="font-bold">အခန်းခဈေးနှုန်း - ${room.price}</span>
        </div>
        <div class="mt-2">
          အခန်းအခြေအနေ: <span class="${room.status === 'ရှင်းပြီး' ? 'text-green-600 font-bold' : 'text-red-600 font-bold py-1'}">${room.status}</span>
        </div>
        <div class="mt-2">
          <button class="bg-blue-500 text-white px-4 py-2 rounded" onclick="toggleStatus('${room.id}')">
            ${room.booked ? 'Check Out' : 'Check In'}
          </button>
        </div>
      `;
  
      roomListContainer.appendChild(roomDiv);
    });
  }
  
  function toggleStatus(roomId) {
    const room = rooms.find(r => r.id === roomId);
    room.booked = !room.booked;
    room.status = room.booked ? 'မရှင်းရသေး' : 'ရှင်းပြီး';
    renderRooms();
  }
  
  renderRooms();
  