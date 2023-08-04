from django.http import JsonResponse
from .models import ListEntry


# Create your views here.
def addTask(request):
    # Check if request is POST
    if request.method == 'POST':

        # Get data from the request
        description = request.POST.get('description')
        due_date = request.POST.get('due_date')

        # Create a new ListEntry object
        new_entry = ListEntry(description=description, due=due_date)
        new_entry.save()

        # Return new entry as JSON
        return JsonResponse(new_entry.to_dict())
    
    # If request is not POST, return error
    else:
        return JsonResponse({'error': 'Invalid request method.'})
